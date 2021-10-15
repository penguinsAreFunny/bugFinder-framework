export interface TraceAP {
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
     * The name of the preprocessor used to preprocess all data to a dataset
     */
    preprocessorName: string;
    /**
     * Version of the preprocessor used to preprocess all data to a dataset
     * If no version is given save the commit hash of the preprocessor used.
     * If no commit hash is given use "0.0.0".
     * This is needed for traceability reasons
     */
    preprocessorVersion: string;
}
