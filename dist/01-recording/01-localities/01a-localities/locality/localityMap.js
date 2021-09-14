"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalityMap = void 0;
/**
 * Map used to generate and use HashMap for Localities.
 * You can set values for a locality, retrieve values for 0-localities and retrieve 0-localities from a
 * locality-hash (locality.key()).
 *
 * Locality-Class can be complex and normal maps use reference semantics.
 * Reading 0-localities from DB might lead to not beeing able to get values from complex locality object
 * read from DB (by-reference vs by-value). Therefore 0-localities need to be hashed before storing them
 * into a map. To still being able to retrieve Locality-Object this LocalityMap saves Locality-Object in a second map
 * with the key locality.key().
 */
var LocalityMap = /** @class */ (function () {
    function LocalityMap() {
        this._valMap = new Map();
        this._locMap = new Map();
        this._localities = [];
    }
    LocalityMap.prototype.set = function (locality, value) {
        this._valMap.set(locality.key(), value);
        this._locMap.set(locality.key(), locality);
        this._localities.push(locality);
    };
    LocalityMap.prototype.push = function (map) {
        var _this = this;
        map.toArray().forEach(function (el) {
            _this.set(el.key, el.val);
        });
    };
    LocalityMap.prototype.getVal = function (locality) {
        return this._valMap.get(locality.key());
    };
    LocalityMap.prototype.getLocality = function (key) {
        return this._locMap.get(key);
    };
    LocalityMap.prototype.getLocalities = function () {
        return this._localities;
    };
    LocalityMap.prototype.size = function () {
        return this._localities.length;
    };
    LocalityMap.prototype.toArray = function () {
        var _this = this;
        return this._localities.map(function (loc) {
            return {
                key: loc,
                val: _this._valMap.get(loc.key())
            };
        });
    };
    LocalityMap.prototype.fromArray = function (arrayMap) {
        var _this = this;
        arrayMap.forEach(function (elem) {
            _this.set(elem.key, elem.val);
        });
    };
    return LocalityMap;
}());
exports.LocalityMap = LocalityMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpdHlNYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvMDEtcmVjb3JkaW5nLzAxLWxvY2FsaXRpZXMvMDFhLWxvY2FsaXRpZXMvbG9jYWxpdHkvbG9jYWxpdHlNYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7Ozs7Ozs7Ozs7R0FVRztBQUNIO0lBS0k7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxFQUFhLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBYSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCx5QkFBRyxHQUFILFVBQUksUUFBVyxFQUFFLEtBQVE7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsMEJBQUksR0FBSixVQUFLLEdBQXNCO1FBQTNCLGlCQUlDO1FBSEcsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUU7WUFDcEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sUUFBVztRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxHQUFXO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVELDBCQUFJLEdBQUo7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQ25DLENBQUM7SUFFRCw2QkFBTyxHQUFQO1FBQUEsaUJBT0M7UUFORyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRztZQUMzQixPQUFPO2dCQUNILEdBQUcsRUFBRSxHQUFHO2dCQUNSLEdBQUcsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDbkMsQ0FBQTtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELCtCQUFTLEdBQVQsVUFBVSxRQUE4QjtRQUF4QyxpQkFJQztRQUhHLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ2pCLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBckRELElBcURDO0FBckRZLGtDQUFXIn0=