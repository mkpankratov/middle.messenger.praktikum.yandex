import type { IListener, TFunction } from './type.ts';

export class EventBus<P = unknown> {
  listeners: IListener<P> = {};
  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: TFunction<P>) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: TFunction<P>) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter((listener: TFunction<P>) => listener !== callback);
  }

  emit(event: string, ...args: P[]) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach(function (listener: TFunction<P>) {
      listener(...args);
    });
  }
}
