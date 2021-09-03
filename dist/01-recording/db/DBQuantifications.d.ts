import { Locality } from "../01-localities/locality";
import { LocalityMap } from "../01-localities";
export interface DBQuantifications<L extends Locality, Quantification> {
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
