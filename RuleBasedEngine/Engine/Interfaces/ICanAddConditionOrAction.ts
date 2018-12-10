import { ICanAddDateTimeOperation } from "./ICanAddDateTimeOperation"
import { ICanAddBoolOperation } from "./ICanAddBoolOperation"
import { ICanAddIntOperation } from "./ICanAddIntOperation"
import { ICanAddOperation } from "./ICanAddOperation"
import { ICanAddStringOperation } from "./ICanAddStringOperation"
import { IRule } from "../../Models/Interfaces/IRule"

export interface ICanAddConditionOrAction {
    AndIf<T>(member: any): ICanAddIntOperation; // member : Expression<Func<T,int>> 
    AndIf<T>(member: any): ICanAddDateTimeOperation; // member : Expression<Func<T, DateTime>>
    AndIf<T>(member: any): ICanAddStringOperation; // member : Expression<Func<T, string>> 
    AndIf<T>(member: any): ICanAddBoolOperation; // member : Expression<Func<T, bool>>
    AndIf<T, M>(member: any): ICanAddOperation; // member : Expression<Func<T, M>>
    Then<T>(action: any): IRule<T>; // action : Expression < Func < T, Action >>
    Then<T1, T2>(action: any): IRule<T1, T2>; // action : Expression < Func < T1, Action >> 
    Validate<T>(): IRule<T>;
    Validate<T1, T2>(): IRule<T1, T2>;
}

