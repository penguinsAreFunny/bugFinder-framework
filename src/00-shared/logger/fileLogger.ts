import {Logger} from "ts-log";
import * as fs from "fs";
import {inject} from "inversify";
import {SHARED_TYPES} from "../TYPES";

class FileLogger implements Logger {
    private readonly fd: number;

    public constructor(@inject(SHARED_TYPES.logFile) filename: string) {
        this.fd = fs.openSync(filename, "a");
    }

    public trace(message?: any, ...optionalParams: any[]): void {
        this.append("TRACE", `${message} ${JSON.stringify(optionalParams)}`);
    }

    public debug(message?: any, ...optionalParams: any[]): void {
        this.append("DEBUG", `${message} ${JSON.stringify(optionalParams)}`);
    }

    public info(message?: any, ...optionalParams: any[]): void {
        this.append("INFO ", `${message} ${JSON.stringify(optionalParams)}`);
    }

    public warn(message?: any, ...optionalParams: any[]): void {
        this.append("WARN ", `${message} ${JSON.stringify(optionalParams)}`);
    }

    public error(message?: any, ...optionalParams: any[]): void {
        this.append("ERROR", `${message} ${JSON.stringify(optionalParams)}`);
    }

    private append(type: string, message: string) {
        fs.writeSync(this.fd, `${new Date().toISOString()} ${type} ${message}\n`);
    }
}