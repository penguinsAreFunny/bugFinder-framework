import { DatasetAP } from "../../02-preprocessing/preprocessing";
import { DatasetAFE } from "./datasetAFE";
export interface FeatureExtractor {
    /**
     * Extract features from dataset.data
     * @see machine learning feature extraction
     * @param dataset
     */
    extractFeatures(dataset: DatasetAP): Promise<DatasetAFE>;
}
