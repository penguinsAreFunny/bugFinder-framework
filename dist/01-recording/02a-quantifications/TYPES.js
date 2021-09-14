"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quantifierContainer = exports.QUANTIFIER_TYPES = void 0;
/**
 * LOCALITY_TYPES: Dependency Injection
 * Used for solving potential circular dependencies
 * It is a LazyServiceIdentifer
 * @See https://github.com/inversify/InversifyJS/blob/master/wiki/classes_as_id.md#known-limitation-classes-as-identifiers-and-circular-dependencies
 *
 * Basics:
 * Symbol.for([string]) creates an unique value. Therefore calling Symbol("Project") 2 times will
 * create two *different* unique values. These values will be replaced by the objects needed.
 * Basically this trick with using @inject(LOCALITY_TYPES.project) make DI think that there is already
 * and instance to be injected (Symbol.for("Project")) at the beginning of DI.
 *
 */
var inversify_1 = require("inversify");
// @Formatter:off
exports.QUANTIFIER_TYPES = {
    quantifier: Symbol("Quantifier"),
    db: Symbol("DB"),
    quantificationFactory: Symbol("QuantificationFactory")
};
exports.quantifierContainer = new inversify_1.Container();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVFlQRVMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvMDEtcmVjb3JkaW5nLzAyYS1xdWFudGlmaWNhdGlvbnMvVFlQRVMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsdUNBQW9DO0FBRXBDLGlCQUFpQjtBQUNKLFFBQUEsZ0JBQWdCLEdBQUc7SUFDNUIsVUFBVSxFQUFjLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDNUMsRUFBRSxFQUFzQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3BDLHFCQUFxQixFQUFHLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztDQUMxRCxDQUFDO0FBRVcsUUFBQSxtQkFBbUIsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQSJ9