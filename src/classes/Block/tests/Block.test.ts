import { expect } from 'chai';
import esmock from 'esmock';
import sinon from 'sinon';

const eventBusMock = {
  on: sinon.fake(),
  emit: sinon.fake(),
};

describe('Block', () => {
  it('should fire init event on initialization', async () => {
    const { Block } = await esmock('../index', {
      '../../EventBus/index': {
        EventBus: class {
          emit = eventBusMock.emit;
          on = eventBusMock.on;
        },
      },
    });

    class ComponentMock extends Block {}

    new ComponentMock();
    expect(eventBusMock.emit.calledWith('init')).to.eq(true);
  });

  it('should fire CDU event on props update', async () => {
    const { Block } = await esmock('../index', {
      '../../EventBus/index': {
        EventBus: class {
          emit = eventBusMock.emit;
          on = eventBusMock.on;
        },
      },
    });

    class ComponentMock extends Block {}

    new ComponentMock();

    const components = new ComponentMock();

    components.setProps({ test: 'test' });

    expect(eventBusMock.emit.calledWith('flow:component-did-update')).to.eq(true);
  });
});
