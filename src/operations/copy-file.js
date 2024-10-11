import {resolve, basename, join} from 'path';
import {createReadStream, createWriteStream, existsSync, statSync} from 'fs';

export function copyFile(currentDir, sourcePath, destDir) {
    const sourceFullPath = resolve(currentDir, sourcePath);

    const destFullPath = resolve(currentDir, destDir);

    if (!existsSync(destFullPath) || !statSync(destFullPath).isDirectory()) {
        console.log('Invalid input: Destination must be a directory.');
        return;
    }

    const destFilePath = join(destFullPath, basename(sourceFullPath));

    const readStream = createReadStream(sourceFullPath);
    const writeStream = createWriteStream(destFilePath);

    readStream.pipe(writeStream);
    readStream.on('error', () => {
        console.log('Operation failed');
    });

    writeStream.on('close', () => {
        console.log('File copied successfully');
    });
}
