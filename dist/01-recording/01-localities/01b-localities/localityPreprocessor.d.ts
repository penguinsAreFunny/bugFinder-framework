import { Locality } from "../locality";
export interface LocalityPreprocessor<L extends Locality> {
    /**
     * Calculates a subset of n 0-localities which will be used for annotations and especially quantification.
     * Consider injecting DB in your implementation to get Localities
     */
    preprocess(): Promise<L[]>;
}
