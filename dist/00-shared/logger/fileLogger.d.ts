import { Logger } from "ts-log";
export declare class FileLogger implements Logger {
    private readonly fd;
    constructor(filename: string);
    trace(message?: any, ...optionalParams: any[]): void;
    debug(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    private append;
}
