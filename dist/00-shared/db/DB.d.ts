/**
 * Interface for writing and reading 0-localities from and to database
 */
import { Locality } from "../../01-recording/01-localities/locality";
import { LocalityMap } from "../../01-recording/01-localities";
export interface DB<L extends Locality, Annotation, Quantification> {
    /**
     * Reads an array of Localities from DB
     * @param fromID collection-/table-name from which should be read
     * @param skip # of elements to skip in db
     * @param n # of elements to read from db
     */
    readLocalities(fromID: string, skip?: number, n?: number): Promise<L[]>;
    /**
     * Writes an array of 0-localities to DB
     * @param localities
     * @param toID collection-/table-name to which should be written
     */
    writeLocalities(localities: L[], toID: string): Promise<void>;
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
    /**
     * Reads a map of <Locality.key, Quantifications> from DB
     * @param fromID
     * @param skip # of elements to skip in db
     * @param n # of elements to read from db
     */
    readQuantifications(fromID: string, skip?: number, n?: number): Promise<LocalityMap<L, Quantification>>;
    /**
     * Writes a map of <Locality.key, Quantifications> to DB
     * @param quantifications
     * @param toID
     */
    writeQuantifications(quantifications: LocalityMap<L, Quantification>, toID: string): Promise<void>;
}