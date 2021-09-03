import { Locality } from "../01-localities/locality";
export interface Annotator<L extends Locality, Annotation> {
    /**
     * Annotates one single locality with a number
     * @param locality
     */
    annotate(locality: L): Annotation;
}
