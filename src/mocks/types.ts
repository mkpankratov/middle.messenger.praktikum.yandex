export type TInbox = {
  avatarUrl: string;
  sender: string;
  excerpt: string;
  time: string;
  unreadCount: number | null;
};

export type TMessageList = {
  type: string;
  text: string;
  img: string | null;
  time: string;
  read: boolean | null;
};
