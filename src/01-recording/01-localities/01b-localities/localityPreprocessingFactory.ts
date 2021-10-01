import {inject, injectable} from "inversify";
import {DB} from "../../../00-shared/db";
import {LOCALITY_PREPROCESSING_TYPES} from "./TYPES";
import {Locality} from "../01a-localities/locality";
import {LocalityPreprocessor} from "./localityPreprocessor";

@injectable()
export class LocalityPreprocessingFactory<L extends Locality> {
    @inject(LOCALITY_PREPROCESSING_TYPES.localityPreprocessor)
    preprocessor: LocalityPreprocessor<L>

    @inject(LOCALITY_PREPROCESSING_TYPES.db)
    db: DB<L, any, any>

    createLocalityPreprocessor(): LocalityPreprocessor<L> {
        return this.preprocessor
    }

    createDB(): DB<L, any, any> {
        return this.db
    }
}