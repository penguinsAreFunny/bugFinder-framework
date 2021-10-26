import { TraceAFE } from "./traceAFE";
/**
 * Dataset after feature extraction
 * This contains traceability information about the feature extraction strategy
 */
export declare class DatasetAFE {
    data: Array<number[]>;
    target: Array<number[]>;
    keys: string[];
    featureNames: string[];
    targetNames: string[];
    description: string;
    traceAFE: TraceAFE;
    constructor(data: Array<number[]>, target: Array<number[]>, keys: string[], featureNames: string[], targetNames: string[], description: string, traceAFE: TraceAFE);
}
