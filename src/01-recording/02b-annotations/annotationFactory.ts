import {Locality} from "../01-localities/locality";
import {inject, injectable} from "inversify";
import {ANNOTATOR_TYPES} from "./TYPES";
import {Annotator} from "./annotator";
import {BUGFINDER_SHARED_TYPES, DB} from "../../00-shared";

@injectable()
export class AnnotationFactory<L extends Locality, Annotation> {
    @inject(ANNOTATOR_TYPES.annotator)
    annotator: Annotator<L, Annotation>

    @inject(BUGFINDER_SHARED_TYPES.db)
    db: DB<L, Annotation, any>

    createDB(): DB<L, Annotation, any>{
        return this.db
    }

    createAnnotator(): Annotator<L, Annotation>{
        return this.annotator
    }
}