"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCALITY_RECORDING_TYPES = void 0;
// @Formatter:off
exports.LOCALITY_RECORDING_TYPES = {
    localityRecorder: Symbol("LocalityRecorder"),
    db: Symbol("DB"),
    localityRecordingFactory: Symbol("LocalityRecordingFactory")
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVFlQRVMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvMDEtcmVjb3JkaW5nLzAxLWxvY2FsaXRpZXMvMDFhLWxvY2FsaXRpZXMvVFlQRVMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7O0FBRUgsaUJBQWlCO0FBQ0osUUFBQSx3QkFBd0IsR0FBRztJQUNwQyxnQkFBZ0IsRUFBWSxNQUFNLENBQUMsa0JBQWtCLENBQUM7SUFDdEQsRUFBRSxFQUEwQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3hDLHdCQUF3QixFQUFJLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztDQUNqRSxDQUFDIn0=