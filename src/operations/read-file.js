import { resolve } from 'path';
import { createReadStream } from 'fs';

export function readFile(currentDir, filePath) {
    const fullPath = resolve(currentDir, filePath);
    const readStream = createReadStream(fullPath, 'utf8');
    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
    readStream.on('error', () => {
        console.log('Operation failed');
    });
}
