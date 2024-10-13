import { readdir } from 'fs'

export function listDirectory(currentDir) {
    readdir(currentDir, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.log('Operation failed');
            return;
        }

        function Files(name, type) {
            this.Name = name;
            this.Type = type;
        }

        const tableData = [];

        for (const file of files) {
            tableData.push(new Files(file.name, file.isDirectory() ? 'directory' : 'file'))
        }
        console.table(tableData);
    });
}
