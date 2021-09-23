import { Locality, LocalityMap } from "../01-localities";
export interface Quantifier<L extends Locality, Quantification> {
    /**
     * Quantifies 0-localities
     */
    quantify(localities: L[]): Promise<LocalityMap<L, Quantification>>;
}
