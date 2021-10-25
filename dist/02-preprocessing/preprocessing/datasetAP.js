"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetAP = void 0;
/**
 * Dataset after preprocessing
 * This contains traceability information about the recording and preprocessing strategy
 */
var DatasetAP = /** @class */ (function () {
    function DatasetAP(data, target, keys, featureNames, targetNames, description, traceAP) {
        this.data = data;
        this.target = target;
        this.keys = keys;
        this.featureNames = featureNames;
        this.targetNames = targetNames;
        this.description = description;
        this.traceAP = traceAP;
    }
    return DatasetAP;
}());
exports.DatasetAP = DatasetAP;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNldEFQLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjLzAyLXByZXByb2Nlc3NpbmcvcHJlcHJvY2Vzc2luZy9kYXRhc2V0QVAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7OztHQUdHO0FBQ0g7SUFFSSxtQkFBbUIsSUFBcUIsRUFDckIsTUFBdUIsRUFDdkIsSUFBYyxFQUNkLFlBQXNCLEVBQ3RCLFdBQXFCLEVBQ3JCLFdBQW1CLEVBQ25CLE9BQWdCO1FBTmhCLFNBQUksR0FBSixJQUFJLENBQWlCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLFNBQUksR0FBSixJQUFJLENBQVU7UUFDZCxpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN0QixnQkFBVyxHQUFYLFdBQVcsQ0FBVTtRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBR25DLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksOEJBQVMifQ==