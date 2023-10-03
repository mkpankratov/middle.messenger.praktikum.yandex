import type { TMessage } from 'controllers/MessageListController/types.ts';

export type TFeedItemProps = {
  type: 'incoming' | 'outgoing';
  myId: number;
  data: TMessage;
  displayTime: string;
};
