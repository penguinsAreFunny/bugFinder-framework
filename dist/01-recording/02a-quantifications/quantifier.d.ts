import { Locality } from "../01-localities/locality";
import { LocalityMap } from "../01-localities";
export interface Quantifier<L extends Locality, Quantification> {
    /**
     * Quantifies 0-localities
     */
    quantify(localities: L[]): Promise<LocalityMap<L, Quantification>>;
    /**
     * TODO: DELETE ME | / refactor
     */
    applyPathHandling(localities: L[]): L[];
}
