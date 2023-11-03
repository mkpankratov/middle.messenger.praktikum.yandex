import { expect } from 'chai';
import sinon from 'sinon';

import type { Router } from '../../../classes/Router/index.ts';
import { NavLinkBase as NavLink } from '../index.ts';

describe('NavLink', () => {
  const fake = sinon.fake();
  const router = { go: fake } as unknown as Router;

  it('element should return anchor', () => {
    const link = new NavLink({ to: '/', text: 'tset', router });
    const element = link.element;

    expect(element).to.be.instanceof(window.HTMLAnchorElement);
  });

  it('should go to passed route on click', async () => {
    const link = new NavLink({ to: '/toc', text: 'tset', router });
    const element = link.element as HTMLAnchorElement;

    element.click();

    expect(fake.calledOnce).to.eq(true);
  });

  it('should swap default className for prop', () => {
    const link = new NavLink({ to: '/toc', className: 'test', text: 'tset', router });
    const element = link.element as HTMLAnchorElement;

    expect(element.classList.contains('test')).to.eq(true);
    expect(element.classList.contains('navlink')).to.eq(false);
  });

  it('should use default className prop', () => {
    const link = new NavLink({ to: '/toc', className: undefined, text: 'tset', router });
    const element = link.element as HTMLAnchorElement;

    expect(element.classList.contains('navlink')).to.eq(true);
  });

  it('should use text prop', () => {
    const link = new NavLink({ to: '/toc', text: 'test text', router });
    const element = link.element as HTMLAnchorElement;

    expect(element.textContent).to.eq('test text');
  });

  it('should use danger prop', () => {
    const link = new NavLink({ to: '/toc', text: 'test text', router, danger: true });
    const element = link.element as HTMLAnchorElement;

    expect(element.classList.contains('danger')).to.eq(true);
  });
});
