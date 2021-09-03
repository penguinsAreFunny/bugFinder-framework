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
        return this.quantifier;
    };
    QuantificationFactory.prototype.createDBLocalities = function () {
        return this.dbLocalities;
    };
    QuantificationFactory.prototype.createDBQuantification = function () {
        return this.dbQuantification;
    };
    __decorate([
        (0, inversify_1.inject)(TYPES_1.QUANTIFIER_TYPES.quantifier),
        __metadata("design:type", Object)
    ], QuantificationFactory.prototype, "quantifier", void 0);
    __decorate([
        (0, inversify_1.inject)(TYPES_1.QUANTIFIER_TYPES.dbLocalities),
        __metadata("design:type", Object)
    ], QuantificationFactory.prototype, "dbLocalities", void 0);
    __decorate([
        (0, inversify_1.inject)(TYPES_1.QUANTIFIER_TYPES.dbQuantification),
        __metadata("design:type", Object)
    ], QuantificationFactory.prototype, "dbQuantification", void 0);
    QuantificationFactory = __decorate([
        (0, inversify_1.injectable)()
    ], QuantificationFactory);
    return QuantificationFactory;
}());
exports.QuantificationFactory = QuantificationFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbnRpZmljYXRpb25GYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjLzAxLXJlY29yZGluZy8wMmEtcXVhbnRpZmljYXRpb25zL3F1YW50aWZpY2F0aW9uRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSx1Q0FBNkM7QUFDN0MsaUNBQXlDO0FBS3pDO0lBQUE7SUFxQkEsQ0FBQztJQVhHLGdEQUFnQixHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUMxQixDQUFDO0lBRUQsa0RBQWtCLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFFRCxzREFBc0IsR0FBdEI7UUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDO0lBbEJEO1FBREMsSUFBQSxrQkFBTSxFQUFDLHdCQUFnQixDQUFDLFVBQVUsQ0FBQzs7NkRBQ007SUFHMUM7UUFEQyxJQUFBLGtCQUFNLEVBQUMsd0JBQWdCLENBQUMsWUFBWSxDQUFDOzsrREFDVDtJQUc3QjtRQURDLElBQUEsa0JBQU0sRUFBQyx3QkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQzs7bUVBQ1k7SUFSN0MscUJBQXFCO1FBRGpDLElBQUEsc0JBQVUsR0FBRTtPQUNBLHFCQUFxQixDQXFCakM7SUFBRCw0QkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLHNEQUFxQiJ9