import { expect } from 'chai';

import { parseValidateRules } from '../parseValidateRules.ts';

describe('parseValidateRules', () => {
  it('should parse string to array', () => {
    const ruleString = 'threeToTwenty, onlyLatin, notAllNubmers';
    const rulesArray = ['threeToTwenty', 'onlyLatin', 'notAllNubmers'];

    expect(parseValidateRules(ruleString)).deep.eq(rulesArray);
  });
});
