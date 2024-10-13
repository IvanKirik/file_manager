import path from 'path';

export function goUp(currentDir) {
    const parentDir = path.dirname(currentDir);
    if (parentDir !== currentDir) {
        return parentDir;
    }
}
