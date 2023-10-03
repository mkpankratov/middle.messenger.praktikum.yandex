import Handlebars from 'handlebars';

import { isEqual } from '../../utils/isEqual.ts';
import { EventBus } from '../EventBus/index.ts';
import { EVENTS } from './constants.ts';
import { getChildrenAndProps } from './helpers/getChildrenAndProps.ts';
import { makeId } from './helpers/makeId.ts';
import type { TChildren, TComponentDidUpdate, TRefs } from './types.ts';

export abstract class Block<P extends Record<string, any> = any> {
  static hbsCompile = Handlebars.compile;
  static EVENTS = EVENTS;
  public id = makeId(6);
  protected props: P;
  protected refs: TRefs = {};
  public children: Record<string, Block | Block[]>;
  private eventBus: () => EventBus<P>;
  private _element: HTMLElement | null = null;
  private getChildrenAndProps = getChildrenAndProps<P>;
  protected tagName: string = 'div';

  constructor(propsWithChildren: P) {
    const { props, children } = this.getChildrenAndProps(propsWithChildren);

    this.children = children;
    this.props = this.makePropsProxy(props);

    const eventBus = new EventBus<P>();

    this.eventBus = () => eventBus;
    this.registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private makePropsProxy = (props: P) => {
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];

        return typeof value === 'function' ? value.bind(target) : value;
      },

      set(target, prop: string, value) {
        const oldTarget = { ...target };

        target[prop as keyof P] = value;

        if (isEqual(oldTarget, target)) {
          return true;
        }

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },

      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  };

  private registerEvents(eventBus: EventBus<P>) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _init() {
    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  private _componentDidMount() {
    this.componentDidMount();
  }

  protected componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    Object.values(this.children).forEach(child => {
      if (Array.isArray(child)) {
        child.forEach(ch => ch.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  private _componentDidUpdate(oldProps?: P, newProps?: P) {
    if (!oldProps || !newProps) {
      return;
    }

    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate: TComponentDidUpdate = () => {
    return true;
  };

  private _render() {
    this.removeEvents();

    const fragment = this.render();
    const new_element = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._element.replaceWith(new_element);
    }

    this._element = new_element;
    this.addEvents();
  }

  protected compile(template: (context: P) => string, context: P) {
    const contextAndStubs: P = { ...context, __refs: this.refs };

    const html = template(contextAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = html;

    contextAndStubs.__children?.forEach(({ embed }: TChildren) => {
      embed(temp.content);
    });

    return temp.content;
  }

  private addEvents() {
    const { events } = this.props;

    if (!events) {
      return;
    }

    Object.keys(events).forEach(eventName => {
      const fn = events[eventName];

      this._element?.addEventListener(eventName, fn);
    });
  }

  private removeEvents() {
    const { events } = this.props;

    if (!events) {
      return;
    }

    Object.keys(events).forEach(eventName => {
      const fn = events[eventName];

      this._element?.removeEventListener(eventName, fn);
    });
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);

    this.eventBus().emit(Block.EVENTS.FLOW_CDU);
  };

  get element() {
    return this._element;
  }

  getContent() {
    return this._element;
  }

  show() {
    this.addEvents();
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
    this.removeEvents();
  }
}
