"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetAFE = void 0;
/**
 * Dataset after feature extraction
 * This contains traceability information about the feature extraction strategy
 */
var DatasetAFE = /** @class */ (function () {
    function DatasetAFE(data, target, featureNames, targetNames, description, traceAP) {
        this.data = data;
        this.target = target;
        this.featureNames = featureNames;
        this.targetNames = targetNames;
        this.description = description;
        this.traceAP = traceAP;
    }
    return DatasetAFE;
}());
exports.DatasetAFE = DatasetAFE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNldEFGRS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wMy1mZWF0dXJlLWV4dHJhY3Rpb24vZmVhdHVyZUV4dHJhY3Rvci9kYXRhc2V0QUZFLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVFBOzs7R0FHRztBQUNIO0lBRUksb0JBQW1CLElBQXFCLEVBQ3JCLE1BQXVCLEVBQ3ZCLFlBQXNCLEVBQ3RCLFdBQXFCLEVBQ3JCLFdBQW1CLEVBQ25CLE9BQWlCO1FBTGpCLFNBQUksR0FBSixJQUFJLENBQWlCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ3RCLGdCQUFXLEdBQVgsV0FBVyxDQUFVO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVU7SUFHcEMsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSxnQ0FBVSJ9