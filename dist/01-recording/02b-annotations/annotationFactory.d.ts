import { Locality } from "../01-localities/locality";
import { DBLocalities } from "../db/DBLocalities";
import { AnnotatorMain } from "./annotatorMain";
import { DBAnnotations } from "../db/DBAnnotations";
export declare class QuantificationFactory<L extends Locality, Annotation> {
    annotatorMain: AnnotatorMain<L, Annotation>;
    dbLocalities: DBLocalities<L>;
    dbAnnotations: DBAnnotations<L, Annotation>;
    createQuantifier(): AnnotatorMain<L, Annotation>;
    createDBLocalities(): DBLocalities<L>;
    createDBQuantification(): DBAnnotations<L, Annotation>;
}
