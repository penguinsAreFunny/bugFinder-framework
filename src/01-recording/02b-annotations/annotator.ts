import {Locality, LocalityMap} from "../01-localities";

export interface Annotator<L extends Locality, Annotation> {

    /**
     * Annotates all localities with a number
     * Annotations may be calculated with more than just 1 locality
     * @param localities
     */
    annotate(localities: L[]): LocalityMap<L, Annotation>;
}
