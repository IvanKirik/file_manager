import os from 'os';
import {COMMANDS} from "./constants/commands.js";
import {changeDirectory, goUp, listDirectory} from "./operations/index.js";

let currentDir = os.homedir();
const args = process.argv.slice(2);

const usernameArg = args.find(arg => arg.startsWith('--username='));
const username = usernameArg ? usernameArg.split('=')[1] : 'User';

console.log(`Welcome to the File Manager, ${username}`);
console.log(`You are currently in ${currentDir}`);

process.on('SIGINT', () => {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
    process.exit();
});

process.stdin.on('data', (data) => {
    const input = data.toString().trim();
    const [command, ...args] = input.split(' ');

    try {
        switch (command) {
            case COMMANDS.UP:
                const parentDir = goUp(currentDir);
                if (parentDir) currentDir = parentDir;
                break;
            case COMMANDS.CD:
                const newDir = changeDirectory(currentDir, args[0]);
                if (newDir) currentDir = newDir;
                break;
            case COMMANDS.LS:
                listDirectory(currentDir);
                break;
            case COMMANDS.EXIT:
                console.log(`Thank you for using File Manager, ${username}, goodbye!`);
                process.exit();
                break;
            default:
                console.log('Invalid input');
        }
    } catch (error) {
        console.log('Operation failed');
    }
    if (input === '.exit') {
        console.log(`Thank you for using File Manager, ${username}, goodbye!`);
        process.exit();
    }


    console.log(`You are currently in ${currentDir}`);
});
