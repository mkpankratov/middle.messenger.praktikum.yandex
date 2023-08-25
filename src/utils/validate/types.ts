export type TValidateEvent = FocusEvent & { target: HTMLInputElement };
export type TValidateReturn = { error: string | undefined; value: string };

export type TValidate = (rulesString: string | undefined, event: TValidateEvent) => TValidateReturn;

type TRuleItem = {
  desc: string;
  regex: RegExp;
  errorMessage: string;
};

export type TRuleList = {
  [key: string]: TRuleItem;
};
