import { IMatchResult } from "./Interfaces/IMatchResult"
import { IRuleAction } from "./Interfaces/IRuleAction"

export class MatchParamResult<T1 = any> implements IMatchResult {
    public IsMatch: boolean
    public Item: T1
    public Action: IRuleAction<T1>

    public Execute(): void {
        if (this.IsMatch && this.Action != null) {
            this.Action.Method(this.Item).Invoke();
        }
    }

    public ToString(): string {
        return `${typeof this.Item} is ${(this.IsMatch ? "" : "not ")}a match`;
    }
}

export class MatchParamsResult<T1 = any, T2 = any> extends MatchParamResult<T1>
{
    public ExtraItem: T2
    public Item1IsMatch: boolean
    public Item2IsMatch: boolean

    public ToString(): string {
        return `${typeof this.Item} is ${(this.Item1IsMatch ? "" : "not ")}a match and ${typeof this.ExtraItem} is ${(this.Item2IsMatch ? "" : "not ")}a match`;
    }
}