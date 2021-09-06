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
export const ANNOTATOR_TYPES = {
    annotatorMain:      Symbol("AnnotatorMain"),
    annotator:          Symbol("Annotator"),
    dbLocalities:       Symbol("DBLocalities"),
    dbAnnotations:      Symbol("DBAnnotations"),
    annotationFactory:  Symbol("AnnotationFactory")
};
