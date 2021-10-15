import {Dataset} from "./dataset";
import {TraceAP} from "./traceAP";

/**
 * Dataset after preprocessing
 * This contains traceability information about the recording and preprocessing strategy
 */
export class DatasetAP implements Dataset {

    constructor(public data: Array<number[]>,
                public target: Array<number[]>,
                public featureNames: string[],
                public targetNames: string[],
                public description: string,
                public traceAP: TraceAP
    ) {

    }
}
