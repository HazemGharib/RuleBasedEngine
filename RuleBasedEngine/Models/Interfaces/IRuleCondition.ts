export interface IBaseRuleCondition {

}

export interface IRuleCondition<T1 = any> extends IBaseRuleCondition {
    IsMatch(member: T1): boolean;
    GenerateExpression(): any; // Expression<Func <T, bool>> 
}

export interface IRuleCondition<T1 = any, T2 = any> extends IBaseRuleCondition {
    IsMatch(member1: T1, member2: T2): boolean;
    GenerateExpression(): any; // Expression < Func < T1, T2, bool >>
}