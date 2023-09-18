import { Block } from '@classes/Block';
import templateString from '@components/chat/components/list/components/listItem/template';
import type { TListItemProps } from '@components/chat/components/list/components/listItem/types';
import { chatListController } from '@controllers/ChatListController';

export class ListItem extends Block<TListItemProps> {
  static template = this.hbsCompile(templateString);
  constructor(props: TListItemProps) {
    super({
      ...props,
      events: {
        click: e => {
          document.querySelector('.chatListItem.active')?.classList.remove('active');

          const { target } = e;

          if (!(target instanceof HTMLElement)) {
            return;
          }

          if (!target.classList.contains('chatListItem')) {
            return;
          }

          target.classList.add('active');
          chatListController.selectChat({ ...props.data });
        },
      },
      activeClass: props.data.id === props.selectedChat?.id ? 'active' : '',
    });
  }

  private defineMessageType(props: TListItemProps) {
    return props.myLogin === props.data.last_message?.user.login;
  }
  private formatDate(jsonDate: string | undefined) {
    if (!jsonDate) return '';
    return `${new Date(jsonDate).getHours()}:${new Date(jsonDate).getMinutes()}`;
  }

  render() {
    this.props.isMyLastWord = this.defineMessageType(this.props);
    this.props.displayTime = this.formatDate(this.props.data?.last_message?.time);
    return this.compile(ListItem.template, this.props);
  }
}
