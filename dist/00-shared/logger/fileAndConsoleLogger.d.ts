import { Logger } from "ts-log";
export declare class LogConfig {
    traceToConsole: boolean;
    debugToConsole: boolean;
    infoToConsole: boolean;
    warnToConsole: boolean;
    errorToConsole: boolean;
    logFile: string;
}
/**
 * FileLogger which optionally writes certain loglevel types to console.
 */
export declare class FileAndConsoleLogger implements Logger {
    logConfig: LogConfig;
    private readonly fd;
    constructor(logConfig: LogConfig);
    trace(message?: any, ...optionalParams: any[]): void;
    debug(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    private append;
    private stringifyOptionalParams;
}
