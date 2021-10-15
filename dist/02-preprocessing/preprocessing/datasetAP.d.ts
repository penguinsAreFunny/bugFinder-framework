import { Dataset } from "./dataset";
import { TraceAP } from "./traceAP";
/**
 * Dataset after preprocessing
 * This contains traceability information about the recording and preprocessing strategy
 */
export declare class DatasetAP implements Dataset {
    data: Array<number[]>;
    target: Array<number[]>;
    featureNames: string[];
    targetNames: string[];
    description: string;
    traceAP: TraceAP;
    constructor(data: Array<number[]>, target: Array<number[]>, featureNames: string[], targetNames: string[], description: string, traceAP: TraceAP);
}
