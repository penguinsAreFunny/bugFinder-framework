import { Locality, LocalityMap } from "../01-localities";
export interface Quantifier<L extends Locality, Quantification> {
    /**
     * Quantify localities
     * @param localitiesToQuantify localities to quantify. Only these localities will be set in return value.
     * @param allLocalities all localities to take into consideration during quantification.
     */
    quantify(localitiesToQuantify: L[], allLocalities?: L[]): Promise<LocalityMap<L, Quantification>>;
}
