import {Locality} from "../01-localities/locality";
import {inject, injectable} from "inversify";
import {DBLocalities} from "../db/DBLocalities";
import {ANNOTATOR_TYPES} from "./TYPES";
import {AnnotatorMain} from "./annotatorMain";
import {DBAnnotations} from "../db/DBAnnotations";

@injectable()
export class QuantificationFactory<L extends Locality, Annotation> {
    @inject(ANNOTATOR_TYPES.annotatorMain)
    annotatorMain: AnnotatorMain<L, Annotation>;

    @inject(ANNOTATOR_TYPES.dbLocalities)
    dbLocalities: DBLocalities<L>

    @inject(ANNOTATOR_TYPES.dbAnnotations)
    dbAnnotations: DBAnnotations<L, Annotation>

    createQuantifier(): AnnotatorMain<L, Annotation>{
        return this.annotatorMain;
    }

    createDBLocalities(): DBLocalities<L>{
        return this.dbLocalities;
    }

    createDBQuantification(): DBAnnotations<L, Annotation>{
        return this.dbAnnotations;
    }
}