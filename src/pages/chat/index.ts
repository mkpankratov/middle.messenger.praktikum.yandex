import { Block } from '../../classes/Block/index.ts';
import { chatListController } from '../../controllers/ChatListController/index.ts';
import templateString from './template.ts';
import type { TChatPageProps } from './types.ts';

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
