import {Locality} from "./locality";

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
export class LocalityMap<L extends Locality, V> {
    private _valMap: Map<string, V>;
    private _locMap: Map<string, L>;
    private readonly _localities: L[];

    constructor() {
        this._valMap = new Map<string, V>();
        this._locMap = new Map<string, L>();
        this._localities = [];
    }

    set(locality: L, value: V) {
        const key = locality.key()
        if(this._valMap.get(key) != null)
            return

        this._valMap.set(key, value);
        this._locMap.set(key, locality);
        this._localities.push(locality);
    }

    push(map: LocalityMap<L, V>) {
        map.toArray().forEach(el => {
            this.set(el.key, el.val);
        })
    }

    getVal(locality: L): V {
        return this._valMap.get(locality.key());
    }

    getLocality(key: string): L {
        return this._locMap.get(key);
    }

    getLocalities(): L[] {
        return this._localities;
    }

    size(): number {
        return this._localities.length;
    }

    toArray(): { key: L, val: V }[] {
        return this._localities.map(loc => {
            return {
                key: loc,
                val: this._valMap.get(loc.key())
            }
        })
    }

    fromArray(arrayMap: { key: L, val: V }[]) {
        arrayMap.forEach(elem => {
            this.set(elem.key, elem.val);
        });
    }
}