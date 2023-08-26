import { Block } from '@classes/Block';
import templateString from '@components/chat/components/feed/components/feedItem/template';

export class FeedItem extends Block {
  static template = this.hbsCompile(templateString);
  render() {
    return this.compile(FeedItem.template, this.props);
  }
}
