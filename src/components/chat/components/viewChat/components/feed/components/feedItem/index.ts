import { Block } from '@classes/Block';
import templateString from '@components/chat/components/viewChat/components/feed/components/feedItem/template';
import type { TFeedItemProps } from '@components/chat/components/viewChat/components/feed/components/feedItem/types';

export class FeedItem extends Block<TFeedItemProps> {
  static template = this.hbsCompile(templateString);

  private defineMessageType(props: TFeedItemProps) {
    return props.myId === props.data.user_id ? 'outgoing' : 'incoming';
  }
  private formatDate(jsonDate: string) {
    return `${new Date(jsonDate).getHours()}:${new Date(jsonDate).getMinutes()}`;
  }
  render() {
    this.props.type = this.defineMessageType(this.props);
    this.props.displayTime = this.formatDate(this.props.data.time);
    return this.compile(FeedItem.template, this.props);
  }
}
