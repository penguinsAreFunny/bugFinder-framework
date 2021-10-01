import { Locality } from "./locality";
import { LocalityRecorder } from "./localityRecorder";
import { DB } from "../../../00-shared/db";
export declare class LocalityRecordingFactory<L extends Locality> {
    recorder: LocalityRecorder<L>;
    db: DB<L, any, any>;
    createLocalityRecorder(): LocalityRecorder<L>;
    createDB(): DB<L, any, any>;
}
