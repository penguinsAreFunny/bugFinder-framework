import { Locality, LocalityMap } from "bugfinder-framework";
import { DatasetAP } from "./datasetAP";
export interface Preprocessor<L extends Locality, Annotation, Quantification> {
    /**
     * Preprocesses the quantifications and annotations.
     * @param quantifications
     * @param annotations
     * @param orderedLocalities
     */
    preprocess(quantifications: LocalityMap<L, Quantification>, annotations: LocalityMap<L, Annotation>, orderedLocalities: L[]): Promise<DatasetAP>;
}
