import {Locality} from "../01-localities/locality";
import {LocalityMap} from "../01-localities";

export interface DBAnnotations<L extends Locality, Annotation>{
    /**
     * Read a map of <Locality.key, Annotations> from DB
     * @param fromID
     * @param skip # of elements to skip in db
     * @param n # of elements to read from db
     */
    readAnnotations(fromID: string, skip?: number, n?: number): Promise<LocalityMap<L, Annotation>>;

    /**
     * Writes a map of <Locality.key, Annotations> to DB
     * @param annotations
     * @param toID
     */
    writeAnnotations(annotations: LocalityMap<L, Annotation>, toID: string): Promise<void>;
}
