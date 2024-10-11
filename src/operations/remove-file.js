import { resolve } from 'path';
import { unlink } from 'fs';

export function removeFile(currentDir, filePath) {
    const fullPath = resolve(currentDir, filePath);
    unlink(fullPath, (err) => {
        if (err) console.log('Operation failed');
    });
}
