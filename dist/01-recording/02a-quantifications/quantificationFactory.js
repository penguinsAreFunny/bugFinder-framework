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
    QuantificationFactory.prototype.createDB = function () {
        return this.db;
    };
    __decorate([
        (0, inversify_1.inject)(TYPES_1.QUANTIFIER_TYPES.quantifier),
        __metadata("design:type", Object)
    ], QuantificationFactory.prototype, "quantifier", void 0);
    __decorate([
        (0, inversify_1.inject)(TYPES_1.QUANTIFIER_TYPES.db),
        __metadata("design:type", Object)
    ], QuantificationFactory.prototype, "db", void 0);
    QuantificationFactory = __decorate([
        (0, inversify_1.injectable)()
    ], QuantificationFactory);
    return QuantificationFactory;
}());
exports.QuantificationFactory = QuantificationFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbnRpZmljYXRpb25GYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjLzAxLXJlY29yZGluZy8wMmEtcXVhbnRpZmljYXRpb25zL3F1YW50aWZpY2F0aW9uRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBNkM7QUFDN0MsaUNBQXlDO0FBS3pDO0lBQUE7SUFjQSxDQUFDO0lBUEcsZ0RBQWdCLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQzFCLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFYRDtRQURDLElBQUEsa0JBQU0sRUFBQyx3QkFBZ0IsQ0FBQyxVQUFVLENBQUM7OzZEQUNNO0lBRzFDO1FBREMsSUFBQSxrQkFBTSxFQUFDLHdCQUFnQixDQUFDLEVBQUUsQ0FBQzs7cURBQ0c7SUFMdEIscUJBQXFCO1FBRGpDLElBQUEsc0JBQVUsR0FBRTtPQUNBLHFCQUFxQixDQWNqQztJQUFELDRCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksc0RBQXFCIn0=