import {removeFile} from "./remove-file.js";
import {copyFile} from "./copy-file.js";

export async function moveFile(currentDir, sourcePath, destDir) {
    await copyFile(currentDir, sourcePath, destDir);
    await removeFile(currentDir, sourcePath);
}
