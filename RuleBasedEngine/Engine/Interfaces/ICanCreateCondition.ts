import { ICanAddDateTimeOperation } from "./ICanAddDateTimeOperation"
import { ICanAddBoolOperation } from "./ICanAddBoolOperation"
import { ICanAddIntOperation } from "./ICanAddIntOperation"
import { ICanAddOperation } from "./ICanAddOperation"
import { ICanAddStringOperation } from "./ICanAddStringOperation"
import { ICanAddDoubleOperation } from "./ICanAddDoubleOperation"
import { ICanAddFloatOperation } from "./ICanAddFloatOperation"
import { ICanAddDecimalOperation } from "./ICanAddDecimalOperation"

export interface ICanCreateCondition {
    If<T>(member: any): ICanAddIntOperation; // member : Expression<Func<T, int>>
    If<T>(member: any): ICanAddDoubleOperation; // member : Expression < Func < T, double >>  
    If<T>(member: any): ICanAddFloatOperation; // member : Expression < Func < T, float >> 
    If<T>(member: any): ICanAddDecimalOperation; // member : Expression < Func < T, decimal >>
    If<T>(member: any): ICanAddDateTimeOperation; // member : Expression < Func < T, DateTime >> 
    If<T>(member: any): ICanAddStringOperation; // member : Expression < Func < T, string >> 
    If<T>(member: any): ICanAddBoolOperation; // member : Expression < Func < T, bool >> 
    If<T, M>(member: any): ICanAddOperation; // member : Expression < Func < T, M >> 
}