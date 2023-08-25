export const parseValidateRules = (ruleString: string | undefined) => {
  if (!ruleString) {
    return [''];
  }

  return ruleString.split(', ');
};
