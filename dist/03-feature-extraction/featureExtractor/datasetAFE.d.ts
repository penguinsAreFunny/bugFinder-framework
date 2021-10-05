import { DatasetAP } from "../../02-preprocessing/preprocessing";
/**
 * Dataset after feature extraction
 * This contains traceability information about the feature extraction strategy
 */
export declare class DatasetAFE {
    data: Array<number[]>;
    target: Array<number[]>;
    featureNames: string[];
    targetNames: string[];
    description: string;
    /**
     * The name of the localityRecorder used to record all localities
     * This is needed for traceability reasons
     */
    locRecordName: string;
    /**
     * Version of the localityRecorder used to record all localities
     * If no version is given save the commit hash of the localityRecorder used.
     * If no commit hash is given use "0.0.0"
     * This is needed for traceability reasons
     */
    locRecordVersion: string;
    /**
     * The name of the localityPreprocessor used to preprocess all localities
     * This is needed for traceability reasons
     */
    locPreprocessName: string;
    /**
     * Version of the localityPreprocessor used to record all localities
     * If no version is given save the commit hash of the localityPreprocessor used.
     * If no commit hash is given use "0.0.0".
     * This is needed for traceability reasons
     */
    locPreprocessVersion: string;
    /**
     * The name of the Annotator used to annotate all localities
     */
    annotatorName: string;
    /**
     * Version of the Annotator used to annotate all localities
     * If no version is given save the commit hash of the annotator used.
     * If no commit hash is given use "0.0.0".
     * This is needed for traceability reasons
     */
    annotatorVersion: string;
    /**
     * The name of the quantifiers used to quantify all localities
     */
    quantifierName: string;
    /**
     * Version of the Quantifier used to quantify all localities
     * If no version is given save the commit hash of the quantifier used.
     * If no commit hash is given use "0.0.0".
     * This is needed for traceability reasons
     */
    quantifierVersion: string;
    /**
     * The name of the feature extractor used to extract features from data
     */
    featureExtractorName: string;
    /**
     * Version of the FeatureExtractor used to extract features
     * If no version is given save the commit hash of the feature extractor.
     * If no commit hash is given use "0.0.0".
     * This is needed for traceability reasons
     */
    featureExtractorVersion: string;
    constructor(datasetAP: DatasetAP, featureExtractorName: string, featureExtractorVersion: string);
}
