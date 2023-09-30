import { Block } from '@classes/Block';
import { chatListController } from '@controllers/ChatListController';
import templateString from '@pages/chat/template';
import type { TChatPageProps } from '@pages/chat/types';

export class ChatPage extends Block<TChatPageProps> {
  static template = this.hbsCompile(templateString);
  constructor(props: TChatPageProps) {
    super({ ...props });
    chatListController.fetchChatList();
  }
  render() {
    return this.compile(ChatPage.template, this.props);
  }
}
