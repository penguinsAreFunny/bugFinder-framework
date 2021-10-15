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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileAndConsoleLogger = exports.LogConfig = void 0;
var fs = __importStar(require("fs"));
var inversify_1 = require("inversify");
var util = __importStar(require("util"));
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
        this.append.apply(this, __spreadArray(["TRACE", this.logConfig.traceToConsole, message, COLOR_RESET], __read(optionalParams), false));
    };
    FileAndConsoleLogger.prototype.debug = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.append.apply(this, __spreadArray(["DEBUG", this.logConfig.debugToConsole, message, COLOR_RESET], __read(optionalParams), false));
    };
    FileAndConsoleLogger.prototype.info = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.append.apply(this, __spreadArray(["INFO", this.logConfig.infoToConsole, message, COLOR_RESET], __read(optionalParams), false));
    };
    FileAndConsoleLogger.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.append.apply(this, __spreadArray(["WARN", this.logConfig.errorToConsole, message, COLOR_FG_YELLOW], __read(optionalParams), false));
    };
    FileAndConsoleLogger.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.append.apply(this, __spreadArray(["ERROR", this.logConfig.errorToConsole, message, COLOR_FG_RED], __read(optionalParams), false));
    };
    FileAndConsoleLogger.prototype.append = function (type, typeToConsole, message, color) {
        var optionalParams = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            optionalParams[_i - 4] = arguments[_i];
        }
        if (typeToConsole) {
            this.toConsole.apply(this, __spreadArray([type, "" + message, color], __read(optionalParams), false));
        }
        this.toFile(type, message + " \n" + this.fileStringyfied.apply(this, __spreadArray([], __read(optionalParams), false)));
    };
    FileAndConsoleLogger.prototype.toConsole = function (type, message, color) {
        var optionalParams = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            optionalParams[_i - 3] = arguments[_i];
        }
        var transformedOptionalParams = this.consoleStringyfied.apply(this, __spreadArray([], __read(optionalParams), false));
        var msg = transformedOptionalParams == "" ?
            "" + color + type + "\t" + message + COLOR_RESET
            : "" + color + type + "\t" + message + COLOR_RESET + "\n" + transformedOptionalParams;
        console.log(msg);
    };
    FileAndConsoleLogger.prototype.toFile = function (type, message) {
        var optionalParams = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            optionalParams[_i - 2] = arguments[_i];
        }
        var transformedOptionalParams = this.fileStringyfied.apply(this, __spreadArray([], __read(optionalParams), false));
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
        return "\t" + stringyfiedParams.split("\n").join("\n\t");
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
        return "\t" + stringyfiedParams.split("\n").join("\n\t");
    };
    FileAndConsoleLogger = __decorate([
        (0, inversify_1.injectable)(),
        __param(0, (0, inversify_1.inject)(TYPES_1.SHARED_TYPES.logConfig)),
        __metadata("design:paramtypes", [LogConfig])
    ], FileAndConsoleLogger);
    return FileAndConsoleLogger;
}());
exports.FileAndConsoleLogger = FileAndConsoleLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZUFuZENvbnNvbGVMb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvMDAtc2hhcmVkL2xvZ2dlci9maWxlQW5kQ29uc29sZUxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFDQUF5QjtBQUN6Qix1Q0FBNkM7QUFDN0MseUNBQTRCO0FBQzVCLGtDQUFzQztBQUV0QztJQUFBO1FBQ0ksbUJBQWMsR0FBWSxJQUFJLENBQUE7UUFDOUIsbUJBQWMsR0FBWSxJQUFJLENBQUE7UUFDOUIsa0JBQWEsR0FBWSxJQUFJLENBQUE7UUFDN0Isa0JBQWEsR0FBWSxJQUFJLENBQUE7UUFDN0IsbUJBQWMsR0FBWSxJQUFJLENBQUE7SUFFbEMsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSw4QkFBUztBQVN0QixJQUFNLFdBQVcsR0FBRyxTQUFTLENBQUE7QUFDN0IsSUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFBO0FBQy9CLElBQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQTtBQUVsQzs7R0FFRztBQUVIO0lBR0ksOEJBQTBELFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDMUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLG9DQUFLLEdBQVosVUFBYSxPQUFhO1FBQUUsd0JBQXdCO2FBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtZQUF4Qix1Q0FBd0I7O1FBQ2hELElBQUksQ0FBQyxNQUFNLE9BQVgsSUFBSSxpQkFBUSxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxFQUFFLFdBQVcsVUFBSyxjQUFjLFdB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