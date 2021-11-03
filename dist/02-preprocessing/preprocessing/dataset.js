"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dataset = void 0;
/**
 * Dataset after preprocessing
 * This contains traceability information about the recording and preprocessing strategy
 */
var Dataset = /** @class */ (function () {
    function Dataset(data, target, keys, featureNames, targetNames, description, traceAP) {
        this.data = data;
        this.target = target;
        this.keys = keys;
        this.featureNames = featureNames;
        this.targetNames = targetNames;
        this.description = description;
        this.traceAP = traceAP;
    }
    return Dataset;
}());
exports.Dataset = Dataset;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wMi1wcmVwcm9jZXNzaW5nL3ByZXByb2Nlc3NpbmcvZGF0YXNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQTs7O0dBR0c7QUFDSDtJQUVJLGlCQUFtQixJQUFxQixFQUNyQixNQUF1QixFQUN2QixJQUFjLEVBQ2QsWUFBc0IsRUFDdEIsV0FBcUIsRUFDckIsV0FBbUIsRUFDbkIsT0FBZ0I7UUFOaEIsU0FBSSxHQUFKLElBQUksQ0FBaUI7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFVO1FBQ3RCLGdCQUFXLEdBQVgsV0FBVyxDQUFVO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFHbkMsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLDBCQUFPIn0=