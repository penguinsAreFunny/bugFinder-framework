import { Locality, LocalityMap } from "bugfinder-framework";
import { DatasetAP } from "./datasetAP";
export interface Preprocessor<L extends Locality, Annotation, Quantification> {
    /**
     * Preprocesses the quantifications and annotations. Generate dataset.
     * @param quantifications
     * @param annotations
     */
    preprocess(quantifications: LocalityMap<L, Quantification>, annotations: LocalityMap<L, Annotation>): Promise<DatasetAP>;
}
