import { Locality, LocalityMap } from "../01-localities";
export interface Annotator<L extends Locality, Annotation> {
    /**
     * Annotates all localities
     * @param localitiesToAnnotate localities to annotate. Only these localities will be set in return value.
     * @param allLocalities all localities to take into consideration during annotation.
     */
    annotate(localitiesToAnnotate: L[], allLocalities?: L[]): Promise<LocalityMap<L, Annotation>>;
}
