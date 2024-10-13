import {resolve} from "path";
import {createReadStream, createWriteStream, promises} from "fs";
import zlib from "node:zlib";

export function decompressFile(currentDir, sourcePath, destDir) {
    const src = resolve(currentDir, sourcePath);
    const dest = resolve(currentDir, destDir);
    const inputStream = createReadStream(src);
    const brotliStream = zlib.createBrotliDecompress();
    const outputStream = createWriteStream(dest);

    inputStream.pipe(brotliStream).pipe(outputStream)
        .on('finish', async () => {
            await promises.rm(src)
            console.log('The file was successfully unpacked');
        })
        .on('error', (err) => {
            console.error(err);
        });
}
