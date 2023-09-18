export type TCreateChatProps = {
  events?: {
    keyup: (e: KeyboardEvent) => void;
    click: (e: MouseEvent) => void;
  };
  header: string;
  showFeed: () => void;
  chatView: 'createMultiple' | 'createSingle';
};
