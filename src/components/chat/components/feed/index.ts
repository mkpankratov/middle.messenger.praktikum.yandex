import { Block } from '@classes/Block';
import type { TProps } from '@classes/Block/types';
import templateString from '@components/chat/components/feed/template';
import avatarUrl from '@images/avatar.png';
import { messageList } from '@mocks/chat';

export class Feed extends Block {
  static template = this.hbsCompile(templateString);
  constructor(props: TProps) {
    super({
      ...props,
      chatAvatarSrc: avatarUrl,
      chatName: 'Вадим',
      messageList,
    });
  }
  render() {
    return this.compile(Feed.template, this.props);
  }
}
