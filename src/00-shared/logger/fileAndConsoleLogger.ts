import {Logger} from "ts-log";
import * as fs from "fs";
import {inject, injectable} from "inversify";
import * as util from "util"
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
        this.append("TRACE", this.logConfig.traceToConsole, message, COLOR_RESET, ...optionalParams)
    }

    public debug(message?: any, ...optionalParams: any[]): void {
        this.append("DEBUG", this.logConfig.debugToConsole, message, COLOR_RESET, ...optionalParams)
    }

    public info(message?: any, ...optionalParams: any[]): void {
        this.append("INFO", this.logConfig.infoToConsole, message, COLOR_RESET, ...optionalParams)
    }

    public warn(message?: any, ...optionalParams: any[]): void {
        this.append("WARN", this.logConfig.errorToConsole, message, COLOR_FG_YELLOW, ...optionalParams)
    }

    public error(message?: any, ...optionalParams: any[]): void {
        this.append("ERROR", this.logConfig.errorToConsole, message, COLOR_FG_RED, ...optionalParams)
    }

    private append(type: string, typeToConsole: boolean, message: string, color: string, ...optionalParams: any[]) {
        if(typeToConsole) {
            this.toConsole(type, `${message}`, color, ...optionalParams)
        }
        this.toFile(type, `${message} \n${this.fileStringyfied(...optionalParams)}`)
    }

    private toConsole(type: string, message: string, color: string, ...optionalParams: any[]){
        const transformedOptionalParams = this.consoleStringyfied(...optionalParams)
        const msg = transformedOptionalParams == ""?
            `${color}${type}\t${message}${COLOR_RESET}`
            : `${color}${type}\t${message}${COLOR_RESET}\n${transformedOptionalParams}`
        console.log(msg)
    }

    private toFile(type: string, message: string, ...optionalParams: any[]){
        const transformedOptionalParams = this.fileStringyfied(...optionalParams)
        const msg = transformedOptionalParams == ""?
            `${new Date().toISOString()} ${type}\t${message}`
            : `${new Date().toISOString()} ${type}\t${message}\n${transformedOptionalParams}`
        fs.writeSync(this.fd, msg);
    }

    private consoleStringyfied(...optionalParams: any[]){
        if (optionalParams == null || optionalParams.length == 0){
            return ""
        }
        // stringified params with coloring
        const stringyfiedParams = util.inspect(optionalParams, {colors: true, depth: null})
        // print JSON one tab to the right
        return "\t" + stringyfiedParams.split("\n").join("\n\t")
    }

    private fileStringyfied(...optionalParams: any[]){
        if (optionalParams == null || optionalParams.length == 0){
            return ""
        }
        // stringified params
        const stringyfiedParams = JSON.stringify(optionalParams, null, 4)
        // print JSON one tab to the right
        return "\t" + stringyfiedParams.split("\n").join("\n\t")
    }
}