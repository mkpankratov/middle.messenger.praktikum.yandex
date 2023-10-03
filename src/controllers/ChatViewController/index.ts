import { store } from '../../classes/Store/index.ts';

export class ChatViewController {
  constructor() {
    this.showFeed();
  }
  public showFeed() {
    store.set('chatView', 'feed');
  }
  public showCreateSingle() {
    store.set('chatView', 'createSingle');
    store.set('searchUserList', []);
  }

  public showCreateMultiple() {
    store.set('chatView', 'createMultiple');
    store.set('multipleUserList', []);
  }
  public showRemoveUser() {
    store.set('chatView', 'removeUser');
  }
  public showAddUser() {
    store.set('chatView', 'addUser');
  }
}

export const chatViewController = new ChatViewController();
