import {inject, injectable} from "inversify";
import {PREPROCESSING_TYPES} from "./TYPES";
import {Preprocessor} from "./preprocessing";
import {Locality} from "bugfinder-framework";
import {DB} from "../00-shared/db";

@injectable()
export class PreprocessingFactory<L extends Locality, Quantification, Annotation> {
    @inject(PREPROCESSING_TYPES.preprocessor)
    preprocessor: Preprocessor<L, Annotation, Quantification>;

    @inject(PREPROCESSING_TYPES.db)
    db: DB<L, Annotation, Quantification>;

    createPreprocessor(): Preprocessor<L, Annotation, Quantification>{
        return this.preprocessor
    }

    createDB(): DB<L, Annotation, Quantification>{
        return this.db;
    }
}