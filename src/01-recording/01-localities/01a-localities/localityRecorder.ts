import {Locality} from "./locality";

export interface LocalityRecorder<L extends Locality> {
    /**
     * Returns an array of Localities to be annotated and quantified in further processing.
     *
     * Implementations of getLocalities might seems to share functionality with annotator.annotate, because in a pre-
     * filtering-process it might be useful to already determine a likely annotation (f.e. corrective | not corrective)
     * for a locality in this function.
     * This is not completely true though as each implementation of LocalityType can be combined with any implementation
     * of an annotator.
     * Example: getLocalities gets 500 commits likely to be corrective. The used 01_Annotator classifies just 400 of those
     * commits as corrective. getLocalities can be used to prefilter 0-localities with the aim of performance enhancements.
     */
    getLocalities(): Promise<L[]>;
}
