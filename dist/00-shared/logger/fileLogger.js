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
var fs = __importStar(require("fs"));
var inversify_1 = require("inversify");
var TYPES_1 = require("../TYPES");
var FileLogger = /** @class */ (function () {
    function FileLogger(filename) {
        this.fd = fs.openSync(filename, "a");
    }
    FileLogger.prototype.trace = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.append("TRACE", message + " " + JSON.stringify(optionalParams));
    };
    FileLogger.prototype.debug = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.append("DEBUG", message + " " + JSON.stringify(optionalParams));
    };
    FileLogger.prototype.info = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.append("INFO ", message + " " + JSON.stringify(optionalParams));
    };
    FileLogger.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.append("WARN ", message + " " + JSON.stringify(optionalParams));
    };
    FileLogger.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.append("ERROR", message + " " + JSON.stringify(optionalParams));
    };
    FileLogger.prototype.append = function (type, message) {
        fs.writeSync(this.fd, new Date().toISOString() + " " + type + " " + message + "\n");
    };
    FileLogger = __decorate([
        __param(0, (0, inversify_1.inject)(TYPES_1.SHARED_TYPES.logFile)),
        __metadata("design:paramtypes", [String])
    ], FileLogger);
    return FileLogger;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZUxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wMC1zaGFyZWQvbG9nZ2VyL2ZpbGVMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscUNBQXlCO0FBQ3pCLHVDQUFpQztBQUNqQyxrQ0FBc0M7QUFFdEM7SUFHSSxvQkFBaUQsUUFBZ0I7UUFDN0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sMEJBQUssR0FBWixVQUFhLE9BQWE7UUFBRSx3QkFBd0I7YUFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1lBQXhCLHVDQUF3Qjs7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUssT0FBTyxTQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFHLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU0sMEJBQUssR0FBWixVQUFhLE9BQWE7UUFBRSx3QkFBd0I7YUFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1lBQXhCLHVDQUF3Qjs7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUssT0FBTyxTQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFHLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU0seUJBQUksR0FBWCxVQUFZLE9BQWE7UUFBRSx3QkFBd0I7YUFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1lBQXhCLHVDQUF3Qjs7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUssT0FBTyxTQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFHLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU0seUJBQUksR0FBWCxVQUFZLE9BQWE7UUFBRSx3QkFBd0I7YUFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1lBQXhCLHVDQUF3Qjs7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUssT0FBTyxTQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFHLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU0sMEJBQUssR0FBWixVQUFhLE9BQWE7UUFBRSx3QkFBd0I7YUFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1lBQXhCLHVDQUF3Qjs7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUssT0FBTyxTQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFHLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU8sMkJBQU0sR0FBZCxVQUFlLElBQVksRUFBRSxPQUFlO1FBQ3hDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBSyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxTQUFJLElBQUksU0FBSSxPQUFPLE9BQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUE3QkMsVUFBVTtRQUdRLFdBQUEsSUFBQSxrQkFBTSxFQUFDLG9CQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7O09BSDlDLFVBQVUsQ0E4QmY7SUFBRCxpQkFBQztDQUFBLEFBOUJELElBOEJDIn0=