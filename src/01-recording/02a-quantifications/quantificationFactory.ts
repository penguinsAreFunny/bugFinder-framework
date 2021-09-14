import {Quantifier} from "./quantifier";
import {inject, injectable} from "inversify";
import {QUANTIFIER_TYPES} from "./TYPES";
import {DB} from "../../00-shared/db";
import {Locality} from "../01-localities/01a-localities/locality";

@injectable()
export class QuantificationFactory<L extends Locality, Quantification> {
    @inject(QUANTIFIER_TYPES.quantifier)
    quantifier: Quantifier<L, Quantification>;

    @inject(QUANTIFIER_TYPES.db)
    db: DB<L, any, Quantification>;

    createQuantifier(): Quantifier<L, Quantification>{
        return this.quantifier
    }

    createDB(): DB<L, any, Quantification>{
        return this.db;
    }
}