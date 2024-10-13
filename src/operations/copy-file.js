import { promises as fsPromises, createReadStream, createWriteStream } from 'fs';
import { resolve, join, basename } from 'path';

export async function copyFile(currentDir, sourcePath, destDir) {
    const sourceFullPath = resolve(currentDir, sourcePath);
    const destFullPath = resolve(currentDir, destDir);

    try {
        await fsPromises.access(destFullPath);
        const stats = await fsPromises.stat(destFullPath);

        if (!stats.isDirectory()) {
            console.log('Invalid input: Destination must be a directory.');
            return;
        }

        const destFilePath = join(destFullPath, basename(sourceFullPath));

        const readStream = createReadStream(sourceFullPath);
        const writeStream = createWriteStream(destFilePath);

        readStream.pipe(writeStream);

        readStream.on('error', () => {
            console.log('Operation failed during file read');
        });

        writeStream.on('close', () => {
            console.log('File copied successfully');
        });

        writeStream.on('error', () => {
            console.log('Operation failed during file write');
        });

    } catch (error) {
        console.log('Operation failed: ', error.message);
    }
}
