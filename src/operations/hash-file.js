import {resolve} from "path";
import {createHash} from "crypto";
import {createReadStream} from "fs";

export function hashFile(currentDir, filePath) {
    const fullPath = resolve(currentDir, filePath);
    const hash = createHash('sha256');

    const readStream = createReadStream(fullPath);

    readStream.on('data', (chunk) => {
        hash.update(chunk);
    });

    readStream.on('end', () => {
        console.log(`SHA256 hash: ${hash.digest('hex')}`);
    });

    readStream.on('error', (err) => {
        console.error('Error reading file:', err);
    });
}
