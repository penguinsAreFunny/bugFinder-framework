// Note: no inheritance from DatasetAP, because possible violation of Liskov substitution principle.
// Semantic differences: features might be transformed (f.e. with principle components analysis) and therefore
// be semantic different from recorded features.
// Possible violation: Usage of DatasetAFE instead of DatasetAP as input for feature extraction.
//      transforming already transformed features leads to missing traceability of whole pipeline used to create
//      dataset. Only one featureExtractor´s trace-data is stored in this object.
import {DatasetAP} from "../../02-preprocessing/preprocessing";

/**
 * Dataset after feature extraction
 * This contains traceability information about the feature extraction strategy
 */
export class DatasetAFE {
    public data: Array<number[]>
    public target: Array<number[]>
    public featureNames: string[]
    public targetNames: string[]
    public description: string

    /**
     * The name of the localityRecorder used to record all localities
     * This is needed for traceability reasons
     */
    public locRecordName: string

    /**
     * Version of the localityRecorder used to record all localities
     * If no version is given save the commit hash of the localityRecorder used.
     * If no commit hash is given use "0.0.0"
     * This is needed for traceability reasons
     */
    public locRecordVersion: string

    /**
     * The name of the localityPreprocessor used to preprocess all localities
     * This is needed for traceability reasons
     */
    public locPreprocessName: string

    /**
     * Version of the localityPreprocessor used to record all localities
     * If no version is given save the commit hash of the localityPreprocessor used.
     * If no commit hash is given use "0.0.0".
     * This is needed for traceability reasons
     */
    public locPreprocessVersion: string

    /**
     * The name of the Annotator used to annotate all localities
     */
    public annotatorName: string

    /**
     * Version of the Annotator used to annotate all localities
     * If no version is given save the commit hash of the annotator used.
     * If no commit hash is given use "0.0.0".
     * This is needed for traceability reasons
     */
    public annotatorVersion: string

    /**
     * The name of the quantifiers used to quantify all localities
     */
    public quantifierName: string

    /**
     * Version of the Quantifier used to quantify all localities
     * If no version is given save the commit hash of the quantifier used.
     * If no commit hash is given use "0.0.0".
     * This is needed for traceability reasons
     */
    public quantifierVersion: string

    /**
     * The name of the feature extractor used to extract features from data
     */
    public featureExtractorName: string

    /**
     * Version of the FeatureExtractor used to extract features
     * If no version is given save the commit hash of the feature extractor.
     * If no commit hash is given use "0.0.0".
     * This is needed for traceability reasons
     */
    public featureExtractorVersion: string

    constructor(datasetAP: DatasetAP,
                featureExtractorName: string,
                featureExtractorVersion: string) {

        this.data = datasetAP.data
        this.target = datasetAP.target
        this.featureNames = datasetAP.featureNames
        this.targetNames = datasetAP.targetNames
        this.description = datasetAP.description
        this.locRecordName = datasetAP.locRecordName
        this.locRecordVersion = datasetAP.locRecordVersion
        this.locPreprocessName = datasetAP.locPreprocessName
        this.locPreprocessVersion = datasetAP.locPreprocessVersion
        this.annotatorName = datasetAP.annotatorName
        this.annotatorVersion = datasetAP.annotatorVersion
        this.quantifierName = datasetAP.quantifierName
        this.quantifierVersion = datasetAP.quantifierVersion
        this.featureExtractorName = featureExtractorName
        this.featureExtractorVersion = featureExtractorVersion
    }
}