import { isAbsolute, join } from 'path';
import { existsSync, statSync } from 'fs';

export function changeDirectory(currentDir, directory) {
    const newPath = isAbsolute(directory) ? directory : join(currentDir, directory);
    if (existsSync(newPath) && statSync(newPath).isDirectory()) {
        return newPath;
    } else {
        console.log('Invalid input');
    }
}
