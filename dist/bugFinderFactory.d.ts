import { Locality, LocalityRecorder } from "./01-recording/01-localities/01a-localities";
import { Quantifier } from "./01-recording/02a-quantifications";
import { LocalityPreprocessor } from "./01-recording/01-localities/01b-localities";
import { Preprocessor } from "./02-preprocessing/preprocessing";
export declare class BugFinderFactory<L extends Locality, Quantification> {
    createLocalityRecorder(): LocalityRecorder<L>;
    createLocalityPreprocessor(): LocalityPreprocessor<L>;
    createQuantifier(): Quantifier<L, Quantification>;
    createPreprocessor(): Preprocessor<L, Quantification, any>;
    createFeatureExtraction(): void;
    createPredictor(): void;
}
