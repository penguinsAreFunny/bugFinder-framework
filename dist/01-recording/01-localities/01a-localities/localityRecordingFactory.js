"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalityRecordingFactory = void 0;
var inversify_1 = require("inversify");
var TYPES_1 = require("./TYPES");
var LocalityRecordingFactory = /** @class */ (function () {
    function LocalityRecordingFactory() {
    }
    LocalityRecordingFactory.prototype.createLocalityRecorder = function () {
        return this.recorder;
    };
    LocalityRecordingFactory.prototype.createDB = function () {
        return this.db;
    };
    __decorate([
        (0, inversify_1.inject)(TYPES_1.LOCALITY_RECORDING_TYPES.localityRecorder),
        __metadata("design:type", Object)
    ], LocalityRecordingFactory.prototype, "recorder", void 0);
    __decorate([
        (0, inversify_1.inject)(TYPES_1.LOCALITY_RECORDING_TYPES.db),
        __metadata("design:type", Object)
    ], LocalityRecordingFactory.prototype, "db", void 0);
    LocalityRecordingFactory = __decorate([
        (0, inversify_1.injectable)()
    ], LocalityRecordingFactory);
    return LocalityRecordingFactory;
}());
exports.LocalityRecordingFactory = LocalityRecordingFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpdHlSZWNvcmRpbmdGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjLzAxLXJlY29yZGluZy8wMS1sb2NhbGl0aWVzLzAxYS1sb2NhbGl0aWVzL2xvY2FsaXR5UmVjb3JkaW5nRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFFN0MsaUNBQWlEO0FBS2pEO0lBQUE7SUFjQSxDQUFDO0lBUEcseURBQXNCLEdBQXRCO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFBO0lBQ2xCLENBQUM7SUFYRDtRQURDLElBQUEsa0JBQU0sRUFBQyxnQ0FBd0IsQ0FBQyxnQkFBZ0IsQ0FBQzs7OERBQ3JCO0lBRzdCO1FBREMsSUFBQSxrQkFBTSxFQUFDLGdDQUF3QixDQUFDLEVBQUUsQ0FBQzs7d0RBQ2pCO0lBTFYsd0JBQXdCO1FBRHBDLElBQUEsc0JBQVUsR0FBRTtPQUNBLHdCQUF3QixDQWNwQztJQUFELCtCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksNERBQXdCIn0=