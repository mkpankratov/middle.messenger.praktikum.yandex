export const evaluateString = (string: string, regex: RegExp) => {
  const match = string.match(regex);

  return Boolean(match);
};
