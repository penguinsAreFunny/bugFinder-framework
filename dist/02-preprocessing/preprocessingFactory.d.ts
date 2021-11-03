import { Preprocessor } from "./preprocessing";
import { Locality } from "../index";
import { DB } from "../00-shared/db";
export declare class PreprocessingFactory<L extends Locality, Quantification, Annotation> {
    preprocessor: Preprocessor<L, Annotation, Quantification>;
    db: DB<L, Annotation, Quantification>;
    createPreprocessor(): Preprocessor<L, Annotation, Quantification>;
    createDB(): DB<L, Annotation, Quantification>;
}
