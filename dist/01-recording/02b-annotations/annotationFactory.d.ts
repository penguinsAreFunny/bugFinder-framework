import { Annotator } from "./annotator";
import { DB } from "../../00-shared";
import { Locality } from "../01-localities/01a-localities/locality";
export declare class AnnotationFactory<L extends Locality, Annotation> {
    annotator: Annotator<L, Annotation>;
    db: DB<L, Annotation, any>;
    createDB(): DB<L, Annotation, any>;
    createAnnotator(): Annotator<L, Annotation>;
}
