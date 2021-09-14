import {inject, injectable} from "inversify";
import {Annotator} from "./annotator";
import {DB} from "../../00-shared";
import {ANNOTATOR_TYPES} from "./TYPES";
import {Locality} from "../01-localities/01a-localities/locality";

@injectable()
export class AnnotationFactory<L extends Locality, Annotation> {
    @inject(ANNOTATOR_TYPES.annotator)
    annotator: Annotator<L, Annotation>

    @inject(ANNOTATOR_TYPES.db)
    db: DB<L, Annotation, any>

    createDB(): DB<L, Annotation, any>{
        return this.db
    }

    createAnnotator(): Annotator<L, Annotation>{
        return this.annotator
    }
}