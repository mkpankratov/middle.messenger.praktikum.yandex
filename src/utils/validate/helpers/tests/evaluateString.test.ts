import { expect } from 'chai';

import { evaluateString } from '../evaluateString.ts';

describe('evaluateString', () => {
  it('checks latin or cyryllic', () => {
    expect(evaluateString('Anatoly', /[A-zЁёА-я]/g)).to.eq(true);
    expect(evaluateString('Сережка', /[A-zЁёА-я]/g)).to.eq(true);
    expect(evaluateString('日本語', /[A-zЁёА-я]/g)).to.eq(false);
  });

  it('checks first capital letter', () => {
    expect(evaluateString('Анатолий', /[A-ZЁА-Я]{1}/g)).to.eq(true);
    expect(evaluateString('анатолий', /[A-ZЁА-Я]{1}/g)).to.eq(false);
    expect(evaluateString('Anatoly', /[A-ZЁА-Я]{1}/g)).to.eq(true);
    expect(evaluateString('anatoly', /[A-ZЁА-Я]{1}/g)).to.eq(false);
  });

  it('checks no letters and spaces', () => {
    expect(evaluateString('Ана толий', /^[^\s\d]+$/g)).to.eq(false);
    expect(evaluateString('Фнфтщли4й', /^[^\s\d]+$/g)).to.eq(false);
    expect(evaluateString('Анатолий', /^[^\s\d]+$/g)).to.eq(true);
  });

  it('checks no special chars', () => {
    expect(evaluateString('Толян**ик', /^[A-zЁёА-я0-9\-]+$/g)).to.eq(false);
    expect(evaluateString('Толян/ик', /^[A-zЁёА-я0-9\-]+$/g)).to.eq(false);
    expect(evaluateString('Толянчик', /^[A-zЁёА-я0-9\-]+$/g)).to.eq(true);
    expect(evaluateString('Толя-нчик', /^[A-zЁёА-я0-9\-]+$/g)).to.eq(true);
  });

  it('checks for containing but not consisting of numbers', () => {
    expect(evaluateString('12323123125412341234', /[\D]{1}/g)).to.eq(false);
    expect(evaluateString('12323sdfsdf123125412341234', /[\D]{1}/g)).to.eq(true);
    expect(evaluateString('Толянчик', /[\D]{1}/g)).to.eq(true);
  });

  it('checks length between 3 and 20', () => {
    expect(evaluateString('12', /^\w{3,20}$/g)).to.eq(false);
    expect(evaluateString('123456789012345678901234567890', /^\w{3,20}$/g)).to.eq(false);
    expect(evaluateString('123456789012', /^\w{3,20}$/g)).to.eq(true);
  });

  it('checks only latin chars', () => {
    expect(evaluateString('Anatoly', /[A-z]/g)).to.eq(true);
    expect(evaluateString('Сережка', /[A-z]/g)).to.eq(false);
  });

  it('checks email string', () => {
    expect(evaluateString('mp@asd.com', /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)).to.eq(true);
    expect(evaluateString('mpasd.com', /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)).to.eq(false);
    expect(evaluateString('mp@asdcom', /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)).to.eq(false);
    expect(evaluateString('m_p@asd.com', /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)).to.eq(true);
  });

  it('checks non empty string', () => {
    expect(evaluateString('Сережка', /[\s\S]/g)).to.eq(true);
    expect(evaluateString('Сер ежка', /[\s\S]/g)).to.eq(true);
    expect(evaluateString('С', /[\s\S]/g)).to.eq(true);
    expect(evaluateString('', /[\s\S]/g)).to.eq(false);
  });

  it('checks phone', () => {
    expect(evaluateString('+111111111', /(^\+[0-9]{9,14}$)|(^[0-9]{10,15}$)/g)).to.eq(true);
    expect(evaluateString('1111111111', /(^\+[0-9]{9,14}$)|(^[0-9]{10,15}$)/g)).to.eq(true);
    expect(evaluateString('11111111', /(^\+[0-9]{9,14}$)|(^[0-9]{10,15}$)/g)).to.eq(false);
  });

  it('checks password', () => {
    expect(evaluateString('asgasdfEasdf34asdd', /(.*[A-Z].*)(.*[0-9].*)/g)).to.eq(true);
    expect(evaluateString('asgasdfEasdfasdd', /(.*[A-Z].*)(.*[0-9].*)/g)).to.eq(false);
    expect(evaluateString('asgasdfasdf34asdd', /(.*[A-Z].*)(.*[0-9].*)/g)).to.eq(false);
  });
});
