import {Dataset} from "./dataset";

/**
 * Dataset after preprocessing
 * This contains traceability information about the recording and preprocessing strategy
 */
export class DatasetAP implements Dataset {


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
     * The name of the preprocessor used to preprocess all data to a dataset
     */
    public preprocessorName: string

    /**
     * Version of the preprocessor used to preprocess all data to a dataset
     * If no version is given save the commit hash of the preprocessor used.
     * If no commit hash is given use "0.0.0".
     * This is needed for traceability reasons
     */
    public preprocessorVersion: string

    constructor(data: Array<number[]>,
                target: Array<number[]>,
                featureNames: string[],
                targetNames: string[],
                description: string,
                locRecordName: string,
                locRecordVersion: string,
                locPreprocessName: string,
                locPreprocessVersion: string,
                annotatorName: string,
                annotatorVersion: string,
                quantifierName: string,
                quantifierVersion: string,
                preprocessorName: string,
                preprocessorVersion: string
    ) {

        this.data = data
        this.target = target
        this.featureNames = featureNames
        this.targetNames = targetNames
        this.description = description
        this.locRecordName = locRecordName
        this.locRecordVersion = locRecordVersion
        this.locPreprocessName = locPreprocessName
        this.locPreprocessVersion = locPreprocessVersion
        this.annotatorName = annotatorName
        this.annotatorVersion = annotatorVersion
        this.quantifierName = quantifierName
        this.quantifierVersion = quantifierVersion
        this.preprocessorName = preprocessorName
        this.preprocessorVersion = preprocessorVersion
    }
}
