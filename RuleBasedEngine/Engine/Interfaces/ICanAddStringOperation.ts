import { ICanAddConditionOrAction } from "./ICanAddConditionOrAction"

export interface ICanAddStringOperation {
    Equal(value: string): ICanAddConditionOrAction;
    NotEqual(value: string): ICanAddConditionOrAction;
}