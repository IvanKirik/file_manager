import {removeFile} from "./remove-file.js";
import {copyFile} from "./copy-file.js";

export function moveFile(currentDir, sourcePath, destDir) {
    copyFile(currentDir, sourcePath, destDir);
    removeFile(currentDir, sourcePath);
}
