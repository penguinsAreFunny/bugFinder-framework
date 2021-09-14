export interface Locality {

    /**
     * If a Locality contains another locality the parentLocality should be saved to
     * achieve normalization in DB
     */
    parentKey?: string;

    /**
     * Returns true if other locality is semantically the same locality as this.
     * @param other
     */
    is(other: Locality): boolean;

    /**
     * Returns a unique hash key for this locality.
     * This key will be used to store the locality into a map.
     * I recommend to generate a sha1-key out of a unique combination of values classifying
     * the locality.
     *
     * @example
     * import * as crypto from "crypto"
     * const string = this.hash + this.file.path
     * const hash = crypto.createHash("sha1").update(string).digest("hex")
     * return hash
     */
    key(): string;

    /**
     * Sets all prototype methods of a locality. Needed for DB-Interface.
     * After receiving DTO from DB all methods need to be set. f.e. is, key and setMethods
     * This is needed for Object-Relation/Document-Mapping
     * @exmaple
     * locality.is = Locality.prototype.is
     * locality.key = Locality.prototype.key
     * locality.setMethods = Locality.prototype.setMethods
     */
    setMethods(localityDTO: Locality): void;
}