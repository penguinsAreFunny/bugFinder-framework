"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetAFE = void 0;
/**
 * Dataset after feature extraction
 * This contains traceability information about the feature extraction strategy
 */
var DatasetAFE = /** @class */ (function () {
    function DatasetAFE(datasetAP, featureExtractorName, featureExtractorVersion) {
        this.data = datasetAP.data;
        this.target = datasetAP.target;
        this.featureNames = datasetAP.featureNames;
        this.targetNames = datasetAP.targetNames;
        this.description = datasetAP.description;
        this.locRecordName = datasetAP.locRecordName;
        this.locRecordVersion = datasetAP.locRecordVersion;
        this.locPreprocessName = datasetAP.locPreprocessName;
        this.locPreprocessVersion = datasetAP.locPreprocessVersion;
        this.annotatorName = datasetAP.annotatorName;
        this.annotatorVersion = datasetAP.annotatorVersion;
        this.quantifierName = datasetAP.quantifierName;
        this.quantifierVersion = datasetAP.quantifierVersion;
        this.featureExtractorName = featureExtractorName;
        this.featureExtractorVersion = featureExtractorVersion;
    }
    return DatasetAFE;
}());
exports.DatasetAFE = DatasetAFE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNldEFGRS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wMy1mZWF0dXJlLWV4dHJhY3Rpb24vZmVhdHVyZUV4dHJhY3Rvci9kYXRhc2V0QUZFLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVFBOzs7R0FHRztBQUNIO0lBMEVJLG9CQUFZLFNBQW9CLEVBQ3BCLG9CQUE0QixFQUM1Qix1QkFBK0I7UUFFdkMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFBO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQTtRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUE7UUFDMUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQTtRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUE7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQTtRQUNsRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixDQUFBO1FBQ3BELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUMsb0JBQW9CLENBQUE7UUFDMUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFBO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUE7UUFDbEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFBO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsaUJBQWlCLENBQUE7UUFDcEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFBO1FBQ2hELElBQUksQ0FBQyx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQTtJQUMxRCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBOUZELElBOEZDO0FBOUZZLGdDQUFVIn0=