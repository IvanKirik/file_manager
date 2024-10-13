import { resolve } from 'path';
import { promises as fsPromises } from 'fs';

export async function renameFile(currentDir, oldPath, newFileName) {
    const oldFullPath = resolve(currentDir, oldPath);
    const newFullPath = resolve(currentDir, newFileName);
    try {
        await fsPromises.rename(oldFullPath, newFullPath);
        console.log('File rename successfully');
    } catch (err) {
        console.log('Operation failed');
    }
}
