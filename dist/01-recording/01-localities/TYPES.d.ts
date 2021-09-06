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
export declare const BUGFINDER_FRAMEWORK_LOCALITY_A_TYPES: {
    localityRecorder: symbol;
    projectRoot: symbol;
};
export declare const BUGFINDER_FRAMEWORK_LOCALITY_B_TYPES: {
    localityPreprocessor: symbol;
    db: symbol;
};
