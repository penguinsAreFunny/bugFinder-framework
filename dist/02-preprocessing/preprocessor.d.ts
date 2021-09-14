import { LocalityMap } from "../01-recording/01-localities";
import { Locality } from "../01-recording/01-localities/01a-localities/locality";
export interface Preprocessor<L extends Locality, Quantification, Annotation> {
    /**
     * Preprocesses the quantifications and annotations.
     * @param quantifications
     * @param annotations
     * @param orderedLocalities
     */
    preprocess(quantifications: LocalityMap<L, Quantification>, annotations: LocalityMap<L, Annotation>, orderedLocalities: L[]): Promise<{
        processedQuantifications: LocalityMap<L, Quantification>;
        processedAnnotations: LocalityMap<L, Annotation>;
    }>;
}
