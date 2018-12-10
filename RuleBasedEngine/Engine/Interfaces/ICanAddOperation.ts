import { ICanAddConditionOrAction } from "./ICanAddConditionOrAction"

export interface ICanAddOperation {
    Equal<T>(value: T): ICanAddConditionOrAction;
    NotEqual<T>(value: T): ICanAddConditionOrAction;
}