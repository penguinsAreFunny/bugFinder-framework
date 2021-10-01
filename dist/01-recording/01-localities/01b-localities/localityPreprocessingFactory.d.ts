import { DB } from "../../../00-shared/db";
import { Locality } from "../01a-localities/locality";
import { LocalityPreprocessor } from "./localityPreprocessor";
export declare class LocalityPreprocessingFactory<L extends Locality> {
    preprocessor: LocalityPreprocessor<L>;
    db: DB<L, any, any>;
    createLocalityPreprocessor(): LocalityPreprocessor<L>;
    createDB(): DB<L, any, any>;
}
