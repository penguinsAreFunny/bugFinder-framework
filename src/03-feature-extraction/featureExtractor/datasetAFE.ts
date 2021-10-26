// Note: no inheritance from DatasetAP, because possible violation of Liskov substitution principle.
// Semantic differences: features might be transformed (f.e. with principle components analysis) and therefore
// be semantic different from recorded features.
// Possible violation: Usage of DatasetAFE instead of DatasetAP as input for feature extraction.
//      transforming already transformed features leads to missing traceability of whole pipeline used to create
//      dataset. Only one featureExtractor´s trace-data is stored in this object.
import {TraceAFE} from "./traceAFE";

/**
 * Dataset after feature extraction
 * This contains traceability information about the feature extraction strategy
 */
export class DatasetAFE {

    constructor(public data: Array<number[]>,
                public target: Array<number[]>,
                public keys: string[],
                public featureNames: string[],
                public targetNames: string[],
                public description: string,
                public traceAFE: TraceAFE
    ) {

    }
}