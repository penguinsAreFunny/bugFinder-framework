import { Quantifier } from "./quantifier";
import { DB } from "../../00-shared/db";
import { Locality } from "../01-localities/01a-localities/locality";
export declare class QuantificationFactory<L extends Locality, Quantification> {
    quantifier: Quantifier<L, Quantification>;
    db: DB<L, any, Quantification>;
    createQuantifier(): Quantifier<L, Quantification>;
    createDB(): DB<L, any, Quantification>;
}
