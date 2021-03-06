import { ICanAddConditionOrAction } from "./ICanAddConditionOrAction"

export interface ICanAddDecimalOperation {
    Equal(value: Number): ICanAddConditionOrAction;
    NotEqual(value: Number): ICanAddConditionOrAction;
    LessThan(value: Number): ICanAddConditionOrAction;
    LessThanOrEqual(value: Number): ICanAddConditionOrAction;
    GreaterThan(value: Number): ICanAddConditionOrAction;
    GreaterThanOrEqual(value: Number): ICanAddConditionOrAction;
}