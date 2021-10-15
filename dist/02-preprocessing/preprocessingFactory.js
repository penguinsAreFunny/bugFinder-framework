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
exports.PreprocessingFactory = void 0;
var inversify_1 = require("inversify");
var TYPES_1 = require("./TYPES");
var PreprocessingFactory = /** @class */ (function () {
    function PreprocessingFactory() {
    }
    PreprocessingFactory.prototype.createPreprocessor = function () {
        return this.preprocessor;
    };
    PreprocessingFactory.prototype.createDB = function () {
        return this.db;
    };
    __decorate([
        (0, inversify_1.inject)(TYPES_1.PREPROCESSING_TYPES.preprocessor),
        __metadata("design:type", Object)
    ], PreprocessingFactory.prototype, "preprocessor", void 0);
    __decorate([
        (0, inversify_1.inject)(TYPES_1.PREPROCESSING_TYPES.db),
        __metadata("design:type", Object)
    ], PreprocessingFactory.prototype, "db", void 0);
    PreprocessingFactory = __decorate([
        (0, inversify_1.injectable)()
    ], PreprocessingFactory);
    return PreprocessingFactory;
}());
exports.PreprocessingFactory = PreprocessingFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlcHJvY2Vzc2luZ0ZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvMDItcHJlcHJvY2Vzc2luZy9wcmVwcm9jZXNzaW5nRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsaUNBQTRDO0FBTTVDO0lBQUE7SUFjQSxDQUFDO0lBUEcsaURBQWtCLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO0lBQzVCLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFYRDtRQURDLElBQUEsa0JBQU0sRUFBQywyQkFBbUIsQ0FBQyxZQUFZLENBQUM7OzhEQUNpQjtJQUcxRDtRQURDLElBQUEsa0JBQU0sRUFBQywyQkFBbUIsQ0FBQyxFQUFFLENBQUM7O29EQUNPO0lBTDdCLG9CQUFvQjtRQURoQyxJQUFBLHNCQUFVLEdBQUU7T0FDQSxvQkFBb0IsQ0FjaEM7SUFBRCwyQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLG9EQUFvQiJ9