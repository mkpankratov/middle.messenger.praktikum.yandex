import { ruleList } from '@utils/validate/constants';
import { evaluateString } from '@utils/validate/helpers/evaluateString';
import { parseValidateRules } from '@utils/validate/helpers/parseValidateRules';
import type { TValidate, TValidateReturn } from '@utils/validate/types';

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
