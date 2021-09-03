import { Locality } from "../01-localities/locality";
import { Quantifier } from "./quantifier";
import { DBLocalities } from "../db/DBLocalities";
import { DBQuantifications } from "../db/DBQuantifications";
export declare class QuantificationFactory<L extends Locality, Quantification> {
    quantifier: Quantifier<L, Quantification>;
    dbLocalities: DBLocalities<L>;
    dbQuantification: DBQuantifications<L, Quantification>;
    createQuantifier(): Quantifier<L, Quantification>;
    createDBLocalities(): DBLocalities<L>;
    createDBQuantification(): DBQuantifications<L, Quantification>;
}
