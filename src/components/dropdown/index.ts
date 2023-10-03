import { Block } from '../../classes/Block/index.ts';
import templateString from './template.ts';
import type { TDropdownProps } from './types.ts';

export class Dropdown extends Block<TDropdownProps> {
  static template = this.hbsCompile(templateString);
  constructor(props: TDropdownProps) {
    super({
      ...props,
      events: {
        click: (e: MouseEvent) => {
          e.preventDefault();
          this.startDroppingDown(e);
        },
      },
    });
  }

  private targetElement: HTMLElement | undefined = undefined;

  private startDroppingDown(e: MouseEvent) {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }

    const classList = e.target.classList;

    if (classList.contains('dropdown-trigger')) {
      e.stopPropagation();
      classList.toggle('isActive');
    }

    this.targetElement = e.target;

    if (classList.contains('dropdown-trigger') && classList.contains('isActive')) {
      document.addEventListener('click', this.closeDropdown);
    }

    if (classList.contains('dropdown-trigger') && !classList.contains('isActive')) {
      document.removeEventListener('click', this.closeDropdown);
    }

    const dropDownItems = this.targetElement.parentElement?.querySelectorAll('.dropdown-content > *');

    dropDownItems?.forEach(child => child.addEventListener('click', this.closeDropdown));
  }

  private closeDropdown = () => {
    this.targetElement?.classList.remove('isActive');
  };

  render() {
    return this.compile(Dropdown.template, this.props);
  }
}
