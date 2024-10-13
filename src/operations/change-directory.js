import { isAbsolute, join } from 'path';
import { promises as fs } from 'fs';

export async function changeDirectory(currentDir, directory) {
    const newPath = isAbsolute(directory) ? directory : join(currentDir, directory);
    try {
        await fs.access(newPath);
        const stats = await fs.stat(newPath);

        if (stats.isDirectory()) {
            return newPath;
        } else {
            console.log('Invalid input');
        }
    } catch (error) {
        console.log('Invalid input');
    }
}
