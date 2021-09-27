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

const COLOR_RESET = "\x1b[0m"
const COLOR_FG_RED = "\x1b[31m"
const COLOR_FG_YELLOW = "\x1b[33m"

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
            this.logConfig.traceToConsole, COLOR_RESET);
    }

    public debug(message?: any, ...optionalParams: any[]): void {
        this.append("DEBUG", `${message} ${JSON.stringify(optionalParams)}`,
            this.logConfig.debugToConsole, COLOR_RESET);
    }

    public info(message?: any, ...optionalParams: any[]): void {
        this.append("INFO ", `${message} ${JSON.stringify(optionalParams)}`,
            this.logConfig.infoToConsole, COLOR_RESET);
    }

    public warn(message?: any, ...optionalParams: any[]): void {
        this.append("WARN ", `${message} ${JSON.stringify(optionalParams)}`,
            this.logConfig.warnToConsole, COLOR_FG_YELLOW);
    }

    public error(message?: any, ...optionalParams: any[]): void {
        this.append("ERROR", `${message} ${JSON.stringify(optionalParams)}`,
            this.logConfig.errorToConsole, COLOR_FG_RED);
    }

    private append(type: string, message: string, toConsole: boolean, color: string) {
        if (toConsole) console.log(`${color}${type} ${message}${COLOR_RESET}`)
        fs.writeSync(this.fd, `${new Date().toISOString()} ${type} ${message}\n`);
    }
}