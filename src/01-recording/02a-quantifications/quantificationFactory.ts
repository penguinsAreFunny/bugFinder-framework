import {Locality} from "../01-localities/locality";
import {Quantifier} from "./quantifier";
import {inject, injectable} from "inversify";
import {QUANTIFIER_TYPES} from "./TYPES";
import {DBLocalities} from "../db/DBLocalities";
import {DBQuantifications} from "../db/DBQuantifications";

@injectable()
export class QuantificationFactory<L extends Locality, Quantification> {
    @inject(QUANTIFIER_TYPES.quantifier)
    quantifier: Quantifier<L, Quantification>;

    @inject(QUANTIFIER_TYPES.dbLocalities)
    dbLocalities: DBLocalities<L>

    @inject(QUANTIFIER_TYPES.dbQuantification)
    dbQuantification: DBQuantifications<L, Quantification>

    createQuantifier(): Quantifier<L, Quantification>{
        return this.quantifier
    }

    createDBLocalities(): DBLocalities<L>{
        return this.dbLocalities;
    }

    createDBQuantification(): DBQuantifications<L, Quantification>{
        return this.dbQuantification;
    }
}