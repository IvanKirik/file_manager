import { join } from 'path';
import { writeFile } from 'fs';

export function createFile(currentDir, fileName) {
    const fullPath = join(currentDir, fileName);
    writeFile(fullPath, '', (err) => {
        if (err) console.log('Operation failed');
    });
}
