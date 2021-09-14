"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.annotatorContainer = exports.ANNOTATOR_TYPES = void 0;
/**
 * ANNOTATOR_TYPES: Dependency Injection
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
var inversify_1 = require("inversify");
// @Formatter:off
exports.ANNOTATOR_TYPES = {
    annotator: Symbol("Annotator"),
    db: Symbol("DB"),
    annotationFactory: Symbol("AnnotationFactory")
};
exports.annotatorContainer = new inversify_1.Container();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVFlQRVMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvMDEtcmVjb3JkaW5nLzAyYi1hbm5vdGF0aW9ucy9UWVBFUy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCx1Q0FBb0M7QUFFcEMsaUJBQWlCO0FBQ0osUUFBQSxlQUFlLEdBQUc7SUFDM0IsU0FBUyxFQUFXLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDdkMsRUFBRSxFQUFrQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hDLGlCQUFpQixFQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztDQUNsRCxDQUFDO0FBRVcsUUFBQSxrQkFBa0IsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQSJ9