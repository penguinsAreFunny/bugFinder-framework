import {TraceAP} from "./traceAP";

/**
 * Dataset after preprocessing
 * This contains traceability information about the recording and preprocessing strategy
 */
export class Dataset {

    constructor(public data: Array<number[]>,
                public target: Array<number[]>,
                public keys: string[],
                public featureNames: string[],
                public targetNames: string[],
                public description: string,
                public traceAP: TraceAP
    ) {

    }
}
