import { join } from 'path';
import { promises as fsPromises } from 'fs';

export async function createFile(currentDir, fileName) {
    const fullPath = join(currentDir, fileName);
    try {
        await fsPromises.writeFile(fullPath, '');
        console.log('File create successfully');
    } catch (e) {
        console.log('Operation failed');
    }
}
