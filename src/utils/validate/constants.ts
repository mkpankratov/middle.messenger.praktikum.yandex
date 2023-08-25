import type { TRuleList } from '@utils/validate/types';

export const ruleList: TRuleList = {
  latinOrCyrillic: {
    desc: 'латиница или кириллица',
    regex: /[A-zЁёА-я]/g,
    errorMessage: 'Допускаются только латинские или киррилические символы',
  },
  capitalCase: {
    desc: 'первая буква должна быть заглавной',
    regex: /[A-ZЁА-Я]{1}/g,
    errorMessage: 'Первая буква должна быть заглавной',
  },
  noSpaceOrNumbers: {
    desc: 'без пробелов и без цифр',
    regex: /^[^\s\d]+$/g,
    errorMessage: 'Не может содержать пробелы или цифры',
  },
  noSpecialChars: {
    desc: 'нет спецсимволов (допустим только дефис)',
    regex: /^[A-zЁёА-я0-9\-]+$/g,
    errorMessage: 'Не может содержать спецсимволы, кроме дефиса',
  },

  threeToTwenty: {
    desc: 'от 3 до 20 символов',
    regex: /^\w{3,20}$/g,
    errorMessage: 'Введите от 3 до 20 символов',
  },
  onlyLatin: { desc: 'латицина', regex: /[A-z]/g, errorMessage: 'Может содержать только латиницу' },
  notAllNubmers: {
    desc: 'может содержать цифры, но не состоять из них',
    regex: /[\D]{1}/g,
    errorMessage: 'Не может состоять только из цифр',
  },
  emailLike: {
    desc: 'имейл',
    regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    errorMessage: 'Введите корректный имейл',
  },
  eightToForty: {
    desc: 'от 8 до 40 символов',
    regex: /^\w{8,40}$/g,
    errorMessage: 'Введите от 8 до 40 символов',
  },
  capitalAndNumber: {
    desc: 'обязательно хотя бы одна заглавная буква и цифра',
    regex: /(.*[A-Z].*)(.*[0-9].*)|(.*[0-9].*)(.*[A-Z].*)/g,
    errorMessage: 'Обязательна одна заглавная буква и цифра',
  },
  phoneLike: {
    desc: 'телефон 10 до 15 символов, состоит из цифр, может начинается с плюса.',
    regex: /(^\+[0-9]{9,14}$)|(^[0-9]{10,15}$)/g,
    errorMessage: 'Введите корректный телефон в формате +7XXXXXXXXXX',
  },
  notEmpty: { desc: 'не пустое поле', regex: /[\s\S]/g, errorMessage: 'Заполните это поле' },
};
