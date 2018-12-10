
import { IMatchResult } from "./IMatchResult"

export interface IRule<T1 = any> {
    Match(item: T1): IMatchResult;
}

export interface IRule<T1 = any, T2 = any> {
    Match(item1: T1, item2: T2): IMatchResult;
}