"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ANNOTATOR_TYPES = void 0;
/**
 * ANNOTATOR_TYPES: Dependency Injection
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
exports.ANNOTATOR_TYPES = {
    annotatorMain: Symbol.for("AnnotatorMain"),
    annotator: Symbol.for("Annotator"),
    dbLocalities: Symbol.for("DBLocalities"),
    dbAnnotations: Symbol.for("DBAnnotations"),
    annotationFactory: Symbol.for("AnnotationFactory")
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVFlQRVMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvMDEtcmVjb3JkaW5nLzAyYi1hbm5vdGF0aW9ucy9UWVBFUy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxpQkFBaUI7QUFDSixRQUFBLGVBQWUsR0FBRztJQUMzQixhQUFhLEVBQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7SUFDL0MsU0FBUyxFQUFXLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQzNDLFlBQVksRUFBUSxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUM5QyxhQUFhLEVBQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7SUFDL0MsaUJBQWlCLEVBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztDQUN0RCxDQUFDIn0=