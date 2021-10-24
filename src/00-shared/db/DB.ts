/**
 * Interface for writing and reading 0-localities from and to database
 */
import {Locality, LocalityMap} from "../../01-recording/01-localities/01a-localities/locality";
import {DatasetAP} from "../../02-preprocessing/preprocessing";
import {DatasetAFE} from "../../03-feature-extraction/featureExtractor";

export enum WriteMode {
    // write only if db is empty
    write,
    // append db
    append
}


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
     * @param mode
     */
    writeLocalities(localities: L[], toID: string, mode?: WriteMode): Promise<void>;

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
     * @param mode
     */
    writeAnnotations(annotations: LocalityMap<L, Annotation>, toID: string, mode?: WriteMode): Promise<void>;

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
     * @param mode
     */
    writeQuantifications(quantifications: LocalityMap<L, Quantification>, toID: string, mode?: WriteMode): Promise<void>;

    /**
     * Reads a DatasetAP from DB
     * @param fromID
     */
    readDatasetAP(fromID: string): Promise<DatasetAP>;

    /**
     * Writes a DatasetAP to DB
     * @param toID
     * @param dataset
     */
    writeDatasetAP(toID: string, dataset: DatasetAP): Promise<void>;

    /**
     * Reads a DatasetAFE from DB
     * @param fromID
     */
    readDatasetAFE(fromID: string): Promise<DatasetAFE>;

    /**
     * Writes a DatasetAFE to DB
     * @param toID
     * @param dataset
     */
    writeDatasetAFE(toID: string, dataset: DatasetAFE): Promise<void>;
}