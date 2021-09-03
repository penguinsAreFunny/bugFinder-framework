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
exports.QuantificationFactory = void 0;
var inversify_1 = require("inversify");
var TYPES_1 = require("./TYPES");
var QuantificationFactory = /** @class */ (function () {
    function QuantificationFactory() {
    }
    QuantificationFactory.prototype.createQuantifier = function () {
        return this.annotatorMain;
    };
    QuantificationFactory.prototype.createDBLocalities = function () {
        return this.dbLocalities;
    };
    QuantificationFactory.prototype.createDBQuantification = function () {
        return this.dbAnnotations;
    };
    __decorate([
        (0, inversify_1.inject)(TYPES_1.ANNOTATOR_TYPES.annotatorMain),
        __metadata("design:type", Object)
    ], QuantificationFactory.prototype, "annotatorMain", void 0);
    __decorate([
        (0, inversify_1.inject)(TYPES_1.ANNOTATOR_TYPES.dbLocalities),
        __metadata("design:type", Object)
    ], QuantificationFactory.prototype, "dbLocalities", void 0);
    __decorate([
        (0, inversify_1.inject)(TYPES_1.ANNOTATOR_TYPES.dbAnnotations),
        __metadata("design:type", Object)
    ], QuantificationFactory.prototype, "dbAnnotations", void 0);
    QuantificationFactory = __decorate([
        (0, inversify_1.injectable)()
    ], QuantificationFactory);
    return QuantificationFactory;
}());
exports.QuantificationFactory = QuantificationFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbkZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvMDEtcmVjb3JkaW5nLzAyYi1hbm5vdGF0aW9ucy9hbm5vdGF0aW9uRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBNkM7QUFFN0MsaUNBQXdDO0FBS3hDO0lBQUE7SUFxQkEsQ0FBQztJQVhHLGdEQUFnQixHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRUQsa0RBQWtCLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFFRCxzREFBc0IsR0FBdEI7UUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQWxCRDtRQURDLElBQUEsa0JBQU0sRUFBQyx1QkFBZSxDQUFDLGFBQWEsQ0FBQzs7Z0VBQ007SUFHNUM7UUFEQyxJQUFBLGtCQUFNLEVBQUMsdUJBQWUsQ0FBQyxZQUFZLENBQUM7OytEQUNSO0lBRzdCO1FBREMsSUFBQSxrQkFBTSxFQUFDLHVCQUFlLENBQUMsYUFBYSxDQUFDOztnRUFDSztJQVJsQyxxQkFBcUI7UUFEakMsSUFBQSxzQkFBVSxHQUFFO09BQ0EscUJBQXFCLENBcUJqQztJQUFELDRCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksc0RBQXFCIn0=