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
exports.LocalityPreprocessingFactory = void 0;
var inversify_1 = require("inversify");
var TYPES_1 = require("./TYPES");
var LocalityPreprocessingFactory = /** @class */ (function () {
    function LocalityPreprocessingFactory() {
    }
    LocalityPreprocessingFactory.prototype.createLocalityPreprocessor = function () {
        return this.preprocessor;
    };
    LocalityPreprocessingFactory.prototype.createDB = function () {
        return this.db;
    };
    __decorate([
        (0, inversify_1.inject)(TYPES_1.LOCALITY_PREPROCESSING_TYPES.localityPreprocessor),
        __metadata("design:type", Object)
    ], LocalityPreprocessingFactory.prototype, "preprocessor", void 0);
    __decorate([
        (0, inversify_1.inject)(TYPES_1.LOCALITY_PREPROCESSING_TYPES.db),
        __metadata("design:type", Object)
    ], LocalityPreprocessingFactory.prototype, "db", void 0);
    LocalityPreprocessingFactory = __decorate([
        (0, inversify_1.injectable)()
    ], LocalityPreprocessingFactory);
    return LocalityPreprocessingFactory;
}());
exports.LocalityPreprocessingFactory = LocalityPreprocessingFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpdHlQcmVwcm9jZXNzaW5nRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy8wMS1yZWNvcmRpbmcvMDEtbG9jYWxpdGllcy8wMWItbG9jYWxpdGllcy9sb2NhbGl0eVByZXByb2Nlc3NpbmdGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUU3QyxpQ0FBcUQ7QUFLckQ7SUFBQTtJQWNBLENBQUM7SUFQRyxpRUFBMEIsR0FBMUI7UUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7SUFDNUIsQ0FBQztJQUVELCtDQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUE7SUFDbEIsQ0FBQztJQVhEO1FBREMsSUFBQSxrQkFBTSxFQUFDLG9DQUE0QixDQUFDLG9CQUFvQixDQUFDOztzRUFDckI7SUFHckM7UUFEQyxJQUFBLGtCQUFNLEVBQUMsb0NBQTRCLENBQUMsRUFBRSxDQUFDOzs0REFDckI7SUFMViw0QkFBNEI7UUFEeEMsSUFBQSxzQkFBVSxHQUFFO09BQ0EsNEJBQTRCLENBY3hDO0lBQUQsbUNBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxvRUFBNEIifQ==