import { Locality } from "../01-localities/locality";
export interface DBLocalities<L extends Locality> {
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
}
