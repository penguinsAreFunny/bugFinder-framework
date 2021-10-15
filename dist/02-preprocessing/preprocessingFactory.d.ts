import { Preprocessor } from "./preprocessing";
import { Locality } from "bugfinder-framework";
import { DB } from "../00-shared/db";
export declare class PreprocessingFactory<L extends Locality, Quantification, Annotation> {
    preprocessor: Preprocessor<L, Annotation, Quantification>;
    db: DB<L, Annotation, Quantification>;
    createPreprocessor(): Preprocessor<L, Annotation, Quantification>;
    createDB(): DB<L, Annotation, Quantification>;
}
