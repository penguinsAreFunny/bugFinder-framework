import {inject, injectable} from "inversify";
import {Locality} from "./locality";
import {LOCALITY_RECORDING_TYPES} from "./TYPES";
import {LocalityRecorder} from "./localityRecorder";
import {DB} from "../../../00-shared/db";

@injectable()
export class LocalityRecordingFactory<L extends Locality> {
    @inject(LOCALITY_RECORDING_TYPES.localityRecorder)
    recorder: LocalityRecorder<L>

    @inject(LOCALITY_RECORDING_TYPES.db)
    db: DB<L, any, any>

    createLocalityRecorder(): LocalityRecorder<L> {
        return this.recorder
    }

    createDB(): DB<L, any, any> {
        return this.db
    }
}