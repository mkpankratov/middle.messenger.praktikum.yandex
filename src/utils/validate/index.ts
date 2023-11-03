import { ruleList } from './constants.ts';
import { evaluateString } from './helpers/evaluateString.ts';
import { parseValidateRules } from './helpers/parseValidateRules.ts';
import type { TValidate, TValidateReturn } from './types.ts';

export const validate: TValidate = (rulesString, event) => {
  const value = event.target.value;

  if (!rulesString) {
    return { error: undefined, value };
  }

  const rulesArray = parseValidateRules(rulesString);
  let resulter: TValidateReturn = { error: undefined, value };

  for (const index in rulesArray) {
    const rule = rulesArray[index];
    const isValidated = evaluateString(value, ruleList[rule]['regex']);

    if (!isValidated) {
      resulter = { error: ruleList[rule]['errorMessage'], value };
    }
  }

  return resulter;
};
