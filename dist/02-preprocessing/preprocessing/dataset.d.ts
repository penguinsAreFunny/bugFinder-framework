/**
 * Representation of a set of data used in machine learning
 * where data contains an array of features and target an array of targets (classes/labels).
 * Based on python sklearn datasets representation.
 */
export interface Dataset {
    /**
     * Features used in machine learning
     */
    data: Array<number[]>;
    /**
     * Targets (classes/labels) used in machine learning
     */
    target: Array<number[]>;
    /**
     * Keys of the localities
     */
    keys: string[];
    featureNames: string[];
    targetNames: string[];
    description: string;
}
