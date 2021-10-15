"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileAndConsoleLogger = exports.LogConfig = void 0;
var fs = __importStar(require("fs"));
var inversify_1 = require("inversify");
var TYPES_1 = require("../TYPES");
var util = __importStar(require("util"));
var LogConfig = /** @class */ (function () {
    function LogConfig() {
        this.traceToConsole = true;
        this.debugToConsole = true;
        this.infoToConsole = true;
        this.warnToConsole = true;
        this.errorToConsole = true;
    }
    return LogConfig;
}());
exports.LogConfig = LogConfig;
var COLOR_RESET = "\x1b[0m";
var COLOR_FG_RED = "\x1b[31m";
var COLOR_FG_YELLOW = "\x1b[33m";
/**
 * FileLogger which optionally writes certain loglevel types to console.
 */
var FileAndConsoleLogger = /** @class */ (function () {
    function FileAndConsoleLogger(logConfig) {
        this.logConfig = logConfig;
        this.fd = fs.openSync(logConfig.logFile, "a");
    }
    FileAndConsoleLogger.prototype.trace = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.append("TRACE", this.logConfig.traceToConsole, message, COLOR_RESET, optionalParams);
    };
    FileAndConsoleLogger.prototype.debug = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.append("DEBUG", this.logConfig.debugToConsole, message, COLOR_RESET, optionalParams);
    };
    FileAndConsoleLogger.prototype.info = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.append("INFO", this.logConfig.infoToConsole, message, COLOR_RESET, optionalParams);
    };
    FileAndConsoleLogger.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.append("WARN", this.logConfig.errorToConsole, message, COLOR_FG_YELLOW, optionalParams);
    };
    FileAndConsoleLogger.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.append("ERROR", this.logConfig.errorToConsole, message, COLOR_FG_RED, optionalParams);
    };
    FileAndConsoleLogger.prototype.append = function (type, typeToConsole, message, color) {
        var optionalParams = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            optionalParams[_i - 4] = arguments[_i];
        }
        if (typeToConsole) {
            this.toConsole(type, "" + message, color, optionalParams);
        }
        this.toFile(type, message + " \n" + this.fileStringyfied(optionalParams));
    };
    FileAndConsoleLogger.prototype.toConsole = function (type, message, color) {
        var optionalParams = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            optionalParams[_i - 3] = arguments[_i];
        }
        var transformedOptionalParams = this.consoleStringyfied(optionalParams);
        var msg = transformedOptionalParams == "" ?
            "" + color + type + "\t" + message + COLOR_RESET
            : "" + color + type + "\t" + message + "\n" + transformedOptionalParams + COLOR_RESET;
        console.log(msg);
    };
    FileAndConsoleLogger.prototype.toFile = function (type, message) {
        var optionalParams = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            optionalParams[_i - 2] = arguments[_i];
        }
        var transformedOptionalParams = this.fileStringyfied(optionalParams);
        var msg = transformedOptionalParams == "" ?
            new Date().toISOString() + " " + type + "\t" + message
            : new Date().toISOString() + " " + type + "\t" + message + "\n" + transformedOptionalParams;
        fs.writeSync(this.fd, msg);
    };
    FileAndConsoleLogger.prototype.consoleStringyfied = function () {
        var optionalParams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            optionalParams[_i] = arguments[_i];
        }
        if (optionalParams == null || optionalParams.length == 0) {
            return "";
        }
        // stringified params with coloring
        var stringyfiedParams = util.inspect(optionalParams, { colors: true, depth: null });
        // print JSON one tab to the right
        return stringyfiedParams.split("\n").map(function (line) { return "\t" + line; }).join("");
    };
    FileAndConsoleLogger.prototype.fileStringyfied = function () {
        var optionalParams = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            optionalParams[_i] = arguments[_i];
        }
        if (optionalParams == null || optionalParams.length == 0) {
            return "";
        }
        // stringified params
        var stringyfiedParams = JSON.stringify(optionalParams, null, 4);
        // print JSON one tab to the right
        return stringyfiedParams.split("\n").map(function (line) { return "\t" + line; }).join("");
    };
    FileAndConsoleLogger = __decorate([
        (0, inversify_1.injectable)(),
        __param(0, (0, inversify_1.inject)(TYPES_1.SHARED_TYPES.logConfig)),
        __metadata("design:paramtypes", [LogConfig])
    ], FileAndConsoleLogger);
    return FileAndConsoleLogger;
}());
exports.FileAndConsoleLogger = FileAndConsoleLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZUFuZENvbnNvbGVMb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvMDAtc2hhcmVkL2xvZ2dlci9maWxlQW5kQ29uc29sZUxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscUNBQXlCO0FBQ3pCLHVDQUE2QztBQUM3QyxrQ0FBc0M7QUFDdEMseUNBQTRCO0FBRTVCO0lBQUE7UUFDSSxtQkFBYyxHQUFZLElBQUksQ0FBQTtRQUM5QixtQkFBYyxHQUFZLElBQUksQ0FBQTtRQUM5QixrQkFBYSxHQUFZLElBQUksQ0FBQTtRQUM3QixrQkFBYSxHQUFZLElBQUksQ0FBQTtRQUM3QixtQkFBYyxHQUFZLElBQUksQ0FBQTtJQUVsQyxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLDhCQUFTO0FBU3RCLElBQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQTtBQUM3QixJQUFNLFlBQVksR0FBRyxVQUFVLENBQUE7QUFDL0IsSUFBTSxlQUFlLEdBQUcsVUFBVSxDQUFBO0FBRWxDOztHQUVHO0FBRUg7SUFHSSw4QkFBMEQsU0FBb0I7UUFBcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUMxRSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sb0NBQUssR0FBWixVQUFhLE9BQWE7UUFBRSx3QkFBd0I7YUFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1lBQXhCLHVDQUF3Qjs7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQTtJQUM3RixDQUFDO0lBRU0sb0NBQUssR0FBWixV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