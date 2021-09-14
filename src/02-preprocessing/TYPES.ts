import {Container} from "inversify";

export const PREPROCESSING_TYPES = {
    preprocessor:   Symbol.for("Preprocessor"),
}

export const preprocessingContainer = new Container()