import { Locality } from "./locality";
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
export declare class LocalityMap<L extends Locality, V> {
    private _valMap;
    private _locMap;
    private readonly _localities;
    constructor();
    set(locality: L, value: V): void;
    push(map: LocalityMap<L, V>): void;
    getVal(locality: L): V;
    getLocality(key: string): L;
    getLocalities(): L[];
    size(): number;
    toArray(): {
        key: L;
        val: V;
    }[];
    fromArray(arrayMap: {
        key: L;
        val: V;
    }[]): void;
}
