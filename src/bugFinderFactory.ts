import {Locality, LocalityRecorder} from "./01-recording/01-localities/01a-localities";
import {Quantifier} from "./01-recording/02a-quantifications";
import {LocalityPreprocessor} from "./01-recording/01-localities/01b-localities";
import {Preprocessor} from "./02-preprocessing/preprocessor";

export class BugFinderFactory<L extends Locality, Quantification> {
    createLocalityRecorder(): LocalityRecorder<L> {
        throw new Error("Not implemented yet")
    }

    createLocalityPreprocessor(): LocalityPreprocessor<L> {
        throw new Error("Not implemented yet")

    }

    createQuantifier(): Quantifier<L, Quantification> {
        throw new Error("Not implemented yet")
    }

    createPreprocessor(): Preprocessor<L, Quantification, any> {
        throw new Error("Not implemented yet")
    }

    createFeatureExtraction(){
        throw new Error("Not implemented yet")
    }

    createPredictor(){
        throw new Error("Not implemented yet")
    }
}