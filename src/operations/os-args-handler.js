import os from 'os';
import {ARGUMENTS} from "../constants/commands.js";

export function osArgsHandler(arg) {
    switch (arg) {
        case ARGUMENTS.EOL:
            console.log(JSON.stringify(os.EOL));
            break;
        case ARGUMENTS.CPUS:
            const cpus = os.cpus();
            console.log(`Total CPUs: ${cpus.length}`);
            cpus.forEach((cpu, index) => {
                console.log(`CPU ${index + 1}: ${cpu.model}, ${cpu.speed / 1000} GHz`);
            });
            break;
        case ARGUMENTS.HOMEDIR:
            console.log(`Home Directory: ${os.homedir()}`);
            break;
        case ARGUMENTS.USERNAME:
            console.log(`System Username: ${os.userInfo().username}`);
            break;
        case ARGUMENTS.ARCHITECTURE:
            console.log(`Architecture: ${os.arch()}`);
            break;
        default:
            console.log('Invalid input');
    }
}
