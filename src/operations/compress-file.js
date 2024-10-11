import {createReadStream, createWriteStream, promises} from "fs";
import {resolve} from "path";
import * as zlib from "node:zlib";

export function compressFile(currentDir, sourcePath, destDir) {
    const src = resolve(currentDir, sourcePath);
    const dest = resolve(currentDir, destDir);
    const inputStream = createReadStream(src);
    const brotliStream = zlib.createBrotliCompress();
    const outputStream = createWriteStream(dest);

    inputStream.pipe(brotliStream).pipe(outputStream)
        .on('finish', async () => {
            await promises.rm(src)
            console.log('File successfully compressed');
        })
        .on('error', (err) => {
            console.error(err);
        });
}
