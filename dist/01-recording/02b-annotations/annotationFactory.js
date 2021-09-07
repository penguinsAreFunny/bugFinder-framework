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
exports.AnnotationFactory = void 0;
var inversify_1 = require("inversify");
var TYPES_1 = require("./TYPES");
var AnnotationFactory = /** @class */ (function () {
    function AnnotationFactory() {
    }
    AnnotationFactory.prototype.createDB = function () {
        return this.db;
    };
    AnnotationFactory.prototype.createAnnotator = function () {
        return this.annotator;
    };
    __decorate([
        (0, inversify_1.inject)(TYPES_1.BUGFINDER_FRAMEWORK_ANNOTATOR_TYPES.annotator),
        __metadata("design:type", Object)
    ], AnnotationFactory.prototype, "annotator", void 0);
    __decorate([
        (0, inversify_1.inject)(TYPES_1.BUGFINDER_FRAMEWORK_ANNOTATOR_TYPES.db),
        __metadata("design:type", Object)
    ], AnnotationFactory.prototype, "db", void 0);
    AnnotationFactory = __decorate([
        (0, inversify_1.injectable)()
    ], AnnotationFactory);
    return AnnotationFactory;
}());
exports.AnnotationFactory = AnnotationFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbkZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvMDEtcmVjb3JkaW5nLzAyYi1hbm5vdGF0aW9ucy9hbm5vdGF0aW9uRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBNkM7QUFHN0MsaUNBQTREO0FBRzVEO0lBQUE7SUFjQSxDQUFDO0lBUEcsb0NBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0lBRUQsMkNBQWUsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtJQUN6QixDQUFDO0lBWEQ7UUFEQyxJQUFBLGtCQUFNLEVBQUMsMkNBQW1DLENBQUMsU0FBUyxDQUFDOzt3REFDbkI7SUFHbkM7UUFEQyxJQUFBLGtCQUFNLEVBQUMsMkNBQW1DLENBQUMsRUFBRSxDQUFDOztpREFDckI7SUFMakIsaUJBQWlCO1FBRDdCLElBQUEsc0JBQVUsR0FBRTtPQUNBLGlCQUFpQixDQWM3QjtJQUFELHdCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksOENBQWlCIn0=