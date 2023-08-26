import { evaluateString } from '../evaluateString';

const testList = [
  ['Anatoly', /[A-zЁёА-я]/g, true],
  ['Сережка', /[A-zЁёА-я]/g, true],
  ['日本語', /[A-Za-zЁёА-я]/g, false],

  ['Анатолий', /[A-ZЁА-Я]{1}/g, true],
  ['анатолий', /[A-ZЁА-Я]{1}/g, false],
  ['Anatoly', /[A-ZЁА-Я]{1}/g, true],
  ['anatoly', /[A-ZЁА-Я]{1}/g, false],

  ['Ана толий', /^[^\s\d]+$/g, false],
  ['Фнфтщли4й', /^[^\s\d]+$/g, false],
  ['Анатолий', /^[^\s\d]+$/g, true],

  ['Толян**ик', /^[A-zЁёА-я0-9\-]+$/g, false],
  ['Толян/ик', /^[A-zЁёА-я0-9\-]+$/g, false],
  ['Толянчик', /^[A-zЁёА-я0-9\-]+$/g, true],
  ['Толя-нчик', /^[A-zЁёА-я0-9\-]+$/g, true],

  ['12323123125412341234', /[\D]{1}/g, false],
  ['12323sdfsdf123125412341234', /[\D]{1}/g, true],
  ['Толянчик', /[\D]{1}/g, true],

  ['12', /^\w{3,20}$/g, false],
  ['123456789012345678901234567890', /^\w{3,20}$/g, false],
  ['123456789012', /^\w{3,20}$/g, true],

  ['Anatoly', /[A-z]/g, true],
  ['Сережка', /[A-z]/g, false],

  ['mp@asd.com', /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, true],
  ['mpasd.com', /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, false],
  ['mp@asdcom', /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, false],
  ['m_p@asd.com', /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, true],

  ['Сережка', /[\s\S]/g, true],
  ['Сер ежка', /[\s\S]/g, true],
  ['С', /[\s\S]/g, true],
  ['', /[\s\S]/g, false],

  ['+111111111', /(^\+[0-9]{9,14}$)|(^[0-9]{10,15}$)/g, true],
  ['1111111111', /(^\+[0-9]{9,14}$)|(^[0-9]{10,15}$)/g, true],
  ['11111111', /(^\+[0-9]{9,14}$)|(^[0-9]{10,15}$)/g, false],

  ['asgasdfEasdf34asdd', /(.*[A-Z].*)(.*[0-9].*)/g, true],
  ['asgasdfEasdfasdd', /(.*[A-Z].*)(.*[0-9].*)/g, false],
  ['asgasdfasdf34asdd', /(.*[A-Z].*)(.*[0-9].*)/g, false],
] as const;

testList.forEach(i => {
  const evaluated = evaluateString(i[0], i[1]);
  const result = evaluated === i[2] ? 'passed' : 'failed';

  /* eslint no-console: 0 */
  console.log(result);
});
