import {Locality} from "../01-localities/locality";
import {inject, injectable} from "inversify";
import {Annotator} from "./annotator";
import {DB} from "../../00-shared";
import {BUGFINDER_FRAMEWORK_ANNOTATOR_TYPES} from "./TYPES";

@injectable()
export class AnnotationFactory<L extends Locality, Annotation> {
    @inject(BUGFINDER_FRAMEWORK_ANNOTATOR_TYPES.annotator)
    annotator: Annotator<L, Annotation>

    @inject(BUGFINDER_FRAMEWORK_ANNOTATOR_TYPES.db)
    db: DB<L, Annotation, any>

    createDB(): DB<L, Annotation, any>{
        return this.db
    }

    createAnnotator(): Annotator<L, Annotation>{
        return this.annotator
    }
}