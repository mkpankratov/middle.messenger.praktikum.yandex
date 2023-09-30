import type { TMessage } from '@controllers/MessageListController/types';

export type TFeedItemProps = {
  type: 'incoming' | 'outgoing';
  myId: number;
  data: TMessage;
  displayTime: string;
};
