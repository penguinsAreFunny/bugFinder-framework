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
        this.append("TRACE", message + " " + this.stringifyOptionalParams(optionalParams), this.logConfig.traceToConsole, COLOR_RESET);
    };
    FileAndConsoleLogger.prototype.debug = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.append("DEBUG", message + " " + this.stringifyOptionalParams(optionalParams), this.logConfig.debugToConsole, COLOR_RESET);
    };
    FileAndConsoleLogger.prototype.info = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.append("INFO ", message + " " + this.stringifyOptionalParams(optionalParams), this.logConfig.infoToConsole, COLOR_RESET);
    };
    FileAndConsoleLogger.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.append("WARN ", message + " " + this.stringifyOptionalParams(optionalParams), this.logConfig.warnToConsole, COLOR_FG_YELLOW);
    };
    FileAndConsoleLogger.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.append("ERROR", message + " " + this.stringifyOptionalParams(optionalParams), this.logConfig.errorToConsole, COLOR_FG_RED);
    };
    FileAndConsoleLogger.prototype.append = function (type, message, toConsole, color) {
        if (toConsole)
            console.log("" + color + type + " " + message + COLOR_RESET);
        fs.writeSync(this.fd, new Date().toISOString() + " " + type + " " + message + "\n");
    };
    FileAndConsoleLogger.prototype.stringifyOptionalParams = function (optionalParams) {
        var stringyfied = JSON.stringify(optionalParams);
        return stringyfied == "[]" ? "" : stringyfied;
    };
    FileAndConsoleLogger = __decorate([
        (0, inversify_1.injectable)(),
        __param(0, (0, inversify_1.inject)(TYPES_1.SHARED_TYPES.logConfig)),
        __metadata("design:paramtypes", [LogConfig])
    ], FileAndConsoleLogger);
    return FileAndConsoleLogger;
}());
exports.FileAndConsoleLogger = FileAndConsoleLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZUFuZENvbnNvbGVMb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvMDAtc2hhcmVkL2xvZ2dlci9maWxlQW5kQ29uc29sZUxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscUNBQXlCO0FBQ3pCLHVDQUE2QztBQUM3QyxrQ0FBc0M7QUFFdEM7SUFBQTtRQUNJLG1CQUFjLEdBQVksSUFBSSxDQUFBO1FBQzlCLG1CQUFjLEdBQVksSUFBSSxDQUFBO1FBQzlCLGtCQUFhLEdBQVksSUFBSSxDQUFBO1FBQzdCLGtCQUFhLEdBQVksSUFBSSxDQUFBO1FBQzdCLG1CQUFjLEdBQVksSUFBSSxDQUFBO0lBRWxDLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBUFksOEJBQVM7QUFTdEIsSUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFBO0FBQzdCLElBQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQTtBQUMvQixJQUFNLGVBQWUsR0FBRyxVQUFVLENBQUE7QUFFbEM7O0dBRUc7QUFFSDtJQUdJLDhCQUEwRCxTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQzFFLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSxvQ0FBSyxHQUFaLFVBQWEsT0FBYTtRQUFFLHdCQUF3QjthQUF4QixVQUF3QixFQUF4QixxQkFBd0IsRUFBeEIsSUFBd0I7WUFBeEIsdUNBQXdCOztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBSyxPQUFPLFNBQUksSUFBSSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsQ0FBRyxFQUM3RSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lB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