import type { TProps } from '@classes/Block/types';
import type { IListener, TFunction } from '@classes/EventBus/type';

export class EventBus {
  listeners: IListener = {};
  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: TFunction) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: TFunction) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter((listener: TFunction) => listener !== callback);
  }

  emit(event: string, ...args: TProps[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach(function (listener: TFunction) {
      listener(...args);
    });
  }
}
