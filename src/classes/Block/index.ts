import { EVENTS } from '@classes/Block/constants';
import { getChildrenAndProps } from '@classes/Block/helpers/getChildrenAndProps';
import { makeId } from '@classes/Block/helpers/makeId';
import type {
  TChildren,
  TComponentDidUpdate,
  TContextAndStubs,
  TProps,
  TPropsWithChildren,
} from '@classes/Block/types';
import { EventBus } from '@classes/EventBus';
import Handlebars from 'handlebars';

export abstract class Block {
  static hbsCompile = Handlebars.compile;
  static EVENTS = EVENTS;
  public id = makeId(6);
  protected props: TProps;
  protected refs: Record<string, Block> = {};
  public children: Record<string, Block>;
  private eventBus: () => EventBus;
  private _element: HTMLElement | null = null;
  private getChildrenAndProps = getChildrenAndProps;
  protected tagName: string = 'div';

  constructor(propsWithChildren: TPropsWithChildren = {}) {
    const { props, children } = this.getChildrenAndProps(propsWithChildren);

    this.children = children;
    this.props = this.makePropsProxy(props);

    const eventBus = new EventBus();

    this.eventBus = () => eventBus;
    this.registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private makePropsProxy = (props: TProps) => {
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];

        return typeof value === 'function' ? value.bind(target) : value;
      },

      set(target, prop: string, value: string) {
        const oldTarget = { ...target };

        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },

      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  };

  private registerEvents(eventBus: EventBus) {
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
    Object.values(this.children).forEach(child => child.dispatchComponentDidMount());
  }

  private _componentDidUpdate(oldProps?: TProps, newProps?: TProps) {
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

  protected compile(template: (context: TProps) => string, context: TProps) {
    const contextAndStubs: TContextAndStubs = { ...context, __refs: this.refs };

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

  setProps = (nextProps: TProps) => {
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
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }
}
