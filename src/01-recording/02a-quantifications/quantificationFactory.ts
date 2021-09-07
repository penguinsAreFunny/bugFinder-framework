import {Locality} from "../01-localities/locality";
import {Quantifier} from "./quantifier";
import {inject, injectable} from "inversify";
import {BUGFINDER_FRAMEWORK_QUANTIFIER_TYPES} from "./TYPES";
import {DB} from "../../00-shared/db";

@injectable()
export class QuantificationFactory<L extends Locality, Quantification> {
    @inject(BUGFINDER_FRAMEWORK_QUANTIFIER_TYPES.quantifier)
    quantifier: Quantifier<L, Quantification>;

    @inject(BUGFINDER_FRAMEWORK_QUANTIFIER_TYPES.db)
    db: DB<L, any, Quantification>;

    createQuantifier(): Quantifier<L, Quantification>{
        return this.quantifier
    }

    createDB(): DB<L, any, Quantification>{
        return this.db;
    }
}