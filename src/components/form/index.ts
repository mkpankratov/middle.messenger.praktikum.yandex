import { Block } from '../../classes/Block/index.ts';
import type { TProps } from '../../classes/Block/types.ts';
import templateString from './template.ts';
import type { TValue } from './types.ts';

export class Form extends Block {
  static template = this.hbsCompile(templateString);
  constructor(props: TProps) {
    super({
      ...props,
      events: {
        submit: (e: SubmitEvent) => {
          this.validateInputs(e);
        },
      },
    });
  }

  private hasValidationError(form: HTMLElement | null) {
    const messageElementList: NodeList | undefined = form?.querySelectorAll('.error-message');
    const messageList: string[] = [];

    messageElementList &&
      messageElementList.forEach(message => message?.textContent && messageList.push(message.textContent));

    if (messageList.join('') === '') {
      return false;
    }

    return true;
  }

  private validateInputs(e: SubmitEvent) {
    if (!this.element) {
      return;
    }

    e.preventDefault();

    const inputList: NodeListOf<HTMLInputElement> | undefined = this.element?.querySelectorAll(
      '[type="text"], [type="password"]',
    );

    inputList?.forEach(element => {
      element.focus();
      element.blur();
    });

    const hasValidationError = this.hasValidationError(this.element);

    if (hasValidationError || !this.element.parentElement) {
      return;
    }

    const form: HTMLFormElement | null = this.element.parentElement.querySelector('form');
    const data = form && new FormData(form);

    if (!data) {
      return;
    }

    const value: TValue = Object.fromEntries(data.entries());

    this.props.submitHandler(value, form);
  }

  render() {
    return this.compile(Form.template, this.props);
  }
}
