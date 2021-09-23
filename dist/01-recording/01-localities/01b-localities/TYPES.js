"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCALITY_B_TYPES = void 0;
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
// @Formatter:off
exports.LOCALITY_B_TYPES = {
    localityPreprocessor: Symbol("LocalityPreprocessor"),
    db: Symbol("DB"),
    db2: Symbol("DB2")
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVFlQRVMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvMDEtcmVjb3JkaW5nLzAxLWxvY2FsaXRpZXMvMDFiLWxvY2FsaXRpZXMvVFlQRVMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsaUJBQWlCO0FBQ0osUUFBQSxnQkFBZ0IsR0FBRztJQUM1QixvQkFBb0IsRUFBUSxNQUFNLENBQUMsc0JBQXNCLENBQUM7SUFDMUQsRUFBRSxFQUEwQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3hDLEdBQUcsRUFBeUIsTUFBTSxDQUFDLEtBQUssQ0FBQztDQUM1QyxDQUFBIn0=