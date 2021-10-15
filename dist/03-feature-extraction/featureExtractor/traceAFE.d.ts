import { TraceAP } from "../../02-preprocessing/preprocessing/traceAP";
export interface TraceAFE extends TraceAP {
    /**
     * The name of the used feature extractor
     */
    featureExtractorName: string;
    /**
     * Version of the feature extractor used
     * If no version is given save the commit hash of the preprocessor used.
     * If no commit hash is given use "0.0.0".
     * This is needed for traceability reasons
     */
    featureExtractorVersion: string;
}
