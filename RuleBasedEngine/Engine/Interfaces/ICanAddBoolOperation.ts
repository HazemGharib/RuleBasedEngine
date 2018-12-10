import { ICanAddConditionOrAction } from "./ICanAddConditionOrAction"

export interface ICanAddBoolOperation {
    IsTrue(): ICanAddConditionOrAction;
    IsFalse(): ICanAddConditionOrAction;
}