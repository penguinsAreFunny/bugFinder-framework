"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BUGFINDER_SHARED_TYPES = void 0;
/**
 * LOCALITY_TYPES: Dependency Injection
 * Used for solving potential circular dependencies
 * It is a LazyServiceIdentifer
 * @See https://github.com/inversify/InversifyJS/blob/master/wiki/classes_as_id.md#known-limitation-classes-as-identifiers-and-circular-dependencies
 *
 * Basics:
 * Symbol([string]) creates an unique value. Therefore calling Symbol("Project") 2 times will
 * create two *different* unique values. These values will be replaced by the objects needed.
 * Basically this trick with using @inject(LOCALITY_TYPES.project) make DI think that there is already
 * and instance to be injected (Symbol("Project")) at the beginning of DI.
 *
 */
// @Formatter:off
exports.BUGFINDER_SHARED_TYPES = {
    db: Symbol("DB")
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVFlQRVMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvMDAtc2hhcmVkL1RZUEVTLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILGlCQUFpQjtBQUNKLFFBQUEsc0JBQXNCLEdBQUc7SUFDbEMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUM7Q0FDbkIsQ0FBQyJ9