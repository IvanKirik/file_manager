import { promises as fsPromises } from 'fs';
import { resolve } from 'path';

export async function removeFile(currentDir, filePath) {
    const fullPath = resolve(currentDir, filePath);
    try {
        await fsPromises.unlink(fullPath);
        console.log('File removed successfully');
    } catch (err) {
        console.log('Operation failed');
    }
}
