import { ICanAddConditionOrAction } from "./ICanAddConditionOrAction";

export interface ICanAddDateTimeOperation {
    Equal(value: Date): ICanAddConditionOrAction;
    NotEqual(value: Date): ICanAddConditionOrAction;
    LessThan(value: Date): ICanAddConditionOrAction;
    LessThanOrEqual(value: Date): ICanAddConditionOrAction;
    GreaterThan(value: Date): ICanAddConditionOrAction;
    GreaterThanOrEqual(value: Date): ICanAddConditionOrAction;
    IsToday(): ICanAddConditionOrAction;
}