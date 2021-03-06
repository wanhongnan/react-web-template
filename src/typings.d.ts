declare module "*.json"

declare module "react-lazyload"

/*
 * ********************************************************************************************************************************
 * 作    者   ： South
 * 版    本   :  1.0.0.0
 * 创建日期   :  2020/04/19
 * 说    明   :  linq集合操作
 * --------------------------------------------------------------------------------------------------------------------------------
 * 版本         修改日期         作者            说明         
 * 1.0.0.0      2020/04/19        South           创建
 * ********************************************************************************************************************************
 */

interface Array<T extends any> {
    maxBy: { <U = string | number | ICompare<T>>(callback: (value: T, index: number, objs: readonly T[]) => U, defaultValue?: T): T; };
    minBy: { <U = string | number | ICompare<T>>(callback: (value: T, index: number, objs: readonly T[]) => U, defaultValue?: T): T; };
    where: { (predicate: (value: T, index: number, objs: readonly T[]) => boolean): T[]; };
    first: { (predicate?: (value: T, index: number, objs: readonly T[]) => boolean, defaultValue?: T): T; };
    last: { (predicate?: (value: T, index: number, objs: readonly T[]) => boolean, defaultValue?: T): T; };
    expend: { <U extends any>(callback: (value: T, index: number, objs: readonly T[]) => U[]) : U[] };
    select: { <U>(callback: (value: T, index: number, objs: readonly T[]) => U): U[]; };
    distinct: { <U>(callback?: (value: T, index: number, objs: readonly T[]) => U): T[]; };
    rand: { (defaultValue?: T): T; };
    groupBy: { <U = string | number>(callback: (value: T, index: number, objs: readonly T[]) => U) : Array<KValue<U,T[]>> }
    each: { (callback: (value: T, index: number, objs: readonly T[]) => void): T[]; };
    sortByAsc: { <U = string | number | ICompare<T>>(callback: (value: T) => U, ): T[]; };
    sortByDsc: { <U = string | number | ICompare<T>>(callback: (value: T) => U, ): T[]; };
    clone: { (): T[]; };
    any: { (predicate: (value: T, index: number, objs: readonly T[]) => boolean): boolean; };
    all: { (predicate: (value: T, index: number, objs: readonly T[]) => boolean): boolean; };
    // collection: {  () :  Collection<T>; } 
}

// interface Object {
//     collection() :  Collection<KValue<string,any>>;
// }

interface Collection<T> extends Iterator<T> {
    where(predicate: (value: T, index?: number) => boolean):Collection<T>;
    take(count: number):Collection<T>;
    skip(count: number):Collection<T>;
    select<U>(callback: (value: T, index?: number) => U): Collection<U>;
    toArray():Array<T>;
    count():number;
    first(predicate?: (value: T, index?: number) => boolean, defaultValue?: T): T | undefined;
    last(predicate?: (value: T, index?: number) => boolean, defaultValue?: T): T | undefined;
    expend<U extends any>(callback: (value: T, index: number) => Collection<U>) : Collection<U>;
}

interface ICompare<T>{
    compare(value:T):number
}

interface KValue<K,V>{
    key: K;
    value: V;
}

