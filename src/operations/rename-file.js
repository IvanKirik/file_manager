import { resolve } from 'path';
import { rename } from 'fs';

export function renameFile(currentDir, oldPath, newFileName) {
    const oldFullPath = resolve(currentDir, oldPath);
    const newFullPath = resolve(currentDir, newFileName);
    rename(oldFullPath, newFullPath, (err) => {
        if (err) console.log('Operation failed');
    });
}
