export interface predictor {
    /**
     * Predicts the targets of an array of features.
     * Each element of the arrayOfFeatures contains the features of one locality
     * @param arrayOfFeatures
     */
    predict(arrayOfFeatures: Array<number[]>): number[];
}
