import { Annotator } from "./annotator";
import { Locality } from "../01-localities/locality";
import { LocalityMap } from "../01-localities";
export interface AnnotatorMain<L extends Locality, Annotation> {
    annotator?: Annotator<L, Annotation>;
    /**
     * Annotates all 0-localities with a number
     * Annotations may be calculated with more than just 1 locality
     * @param localities
     */
    annotate(localities: L[]): LocalityMap<L, Annotation>;
}
