"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetAP = void 0;
/**
 * Dataset after preprocessing
 * This contains traceability information about the recording and preprocessing strategy
 */
var DatasetAP = /** @class */ (function () {
    function DatasetAP(data, target, featureNames, targetNames, description, locRecordName, locRecordVersion, locPreprocessName, locPreprocessVersion, annotatorName, annotatorVersion, quantifierName, quantifierVersion, preprocessorName, preprocessorVersion) {
        this.data = data;
        this.target = target;
        this.featureNames = featureNames;
        this.targetNames = targetNames;
        this.description = description;
        this.locRecordName = locRecordName;
        this.locRecordVersion = locRecordVersion;
        this.locPreprocessName = locPreprocessName;
        this.locPreprocessVersion = locPreprocessVersion;
        this.annotatorName = annotatorName;
        this.annotatorVersion = annotatorVersion;
        this.quantifierName = quantifierName;
        this.quantifierVersion = quantifierVersion;
        this.preprocessorName = preprocessorName;
        this.preprocessorVersion = preprocessorVersion;
    }
    return DatasetAP;
}());
exports.DatasetAP = DatasetAP;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNldEFQLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjLzAyLXByZXByb2Nlc3NpbmcvcHJlcHJvY2Vzc2luZy9kYXRhc2V0QVAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7OztHQUdHO0FBQ0g7SUE0RUksbUJBQVksSUFBcUIsRUFDckIsTUFBdUIsRUFDdkIsWUFBc0IsRUFDdEIsV0FBcUIsRUFDckIsV0FBbUIsRUFDbkIsYUFBcUIsRUFDckIsZ0JBQXdCLEVBQ3hCLGlCQUF5QixFQUN6QixvQkFBNEIsRUFDNUIsYUFBcUIsRUFDckIsZ0JBQXdCLEVBQ3hCLGNBQXNCLEVBQ3RCLGlCQUF5QixFQUN6QixnQkFBd0IsRUFDeEIsbUJBQTJCO1FBR25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFBO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQTtRQUN4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUE7UUFDMUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFBO1FBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQTtRQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUE7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFBO1FBQ3hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQTtJQUNsRCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBN0dELElBNkdDO0FBN0dZLDhCQUFTIn0=