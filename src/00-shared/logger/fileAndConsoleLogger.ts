import {Logger} from "ts-log";
import * as fs from "fs";
import {inject, injectable} from "inversify";
import {SHARED_TYPES} from "../TYPES";

export class LogConfig {
    traceToConsole: boolean = true
    debugToConsole: boolean = true
    infoToConsole: boolean = true
    warnToConsole: boolean = true
    errorToConsole: boolean = true
    logFile: string
}

/**
 * FileLogger which optionally writes certain loglevel types to console.
 */
@injectable()
export class FileAndConsoleLogger implements Logger {

    private readonly fd: number;

    public constructor(@inject(SHARED_TYPES.logConfig) public logConfig: LogConfig) {
        this.fd = fs.openSync(logConfig.logFile, "a");
    }

    public trace(message?: any, ...optionalParams: any[]): void {
        this.append("TRACE", `${message} ${JSON.stringify(optionalParams)}`,
            this.logConfig.traceToConsole);
    }

    public debug(message?: any, ...optionalParams: any[]): void {
        this.append("DEBUG", `${message} ${JSON.stringify(optionalParams)}`,
            this.logConfig.debugToConsole);
    }

    public info(message?: any, ...optionalParams: any[]): void {
        this.append("INFO ", `${message} ${JSON.stringify(optionalParams)}`,
            this.logConfig.infoToConsole);
    }

    public warn(message?: any, ...optionalParams: any[]): void {
        this.append("WARN ", `${message} ${JSON.stringify(optionalParams)}`,
            this.logConfig.warnToConsole);
    }

    public error(message?: any, ...optionalParams: any[]): void {
        this.append("ERROR", `${message} ${JSON.stringify(optionalParams)}`,
            this.logConfig.errorToConsole);
    }

    private append(type: string, message: string, toConsole: boolean) {
        if (toConsole) console.log(`${type} ${message}`)
        fs.writeSync(this.fd, `${new Date().toISOString()} ${type} ${message}\n`);
    }
}