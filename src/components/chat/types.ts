export type TChatProps = {
  activeView: 'feed' | 'create' | 'update';
  showFeed: () => void;
  showCreate: () => void;
  showUpdate: () => void;
};
