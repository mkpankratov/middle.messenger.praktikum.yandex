import type { TUser } from '@api/AuthAPI/types';
import { Block } from '@classes/Block';
import { store } from '@classes/Store';
import templateString from '@components/chat/components/viewChat/components/createChat/template';
import type { TCreateChatProps } from '@components/chat/components/viewChat/components/createChat/types';
import { chatListController } from '@controllers/ChatListController';
import { chatViewController } from '@controllers/ChatViewController';
import { userController } from '@controllers/UserController';

export class CreateChat extends Block<TCreateChatProps> {
  static template = this.hbsCompile(templateString);
  static headerList = {
    createSingle: 'Создать чат с пользователем',
    createMultiple: 'Создать групповой чат',
    addUser: 'Добавить пользователя в чат',
  };

  constructor(props: TCreateChatProps) {
    super({ ...props });
    this.props.events = { keyup: this.onChange, click: this.handleAddUser };
    this.props.showFeed = chatViewController.showFeed;
    this.props.header = CreateChat.headerList[this.props.chatView];
  }

  public onChange = (e: KeyboardEvent) => {
    if (!e.target || !(e.target instanceof HTMLInputElement)) {
      return;
    }

    if (e.target.name === 'login') {
      userController.searchUser({ login: e.target.value });
    }
  };

  public async handleAddSingleUserChat(element: HTMLElement) {
    await chatListController.createNewChat(element.dataset.userName || 'Новый чат', [
      Number(element.dataset.userId),
    ]);
    chatViewController.showFeed();
  }

  public handleAddMultipleChat = async (element: HTMLElement) => {
    const multipleUserList = store.getState().multipleUserList || [];
    const searchUserList: TUser[] = store.getState().searchUserList;
    const id = element.dataset.userId;
    const selectedUser = searchUserList.find(i => i.id === Number(id));

    store.set('multipleUserList', [...multipleUserList, selectedUser]);
    store.set('searchUserList', []);

    const inputElement = document.querySelector('.input[name="login"]');

    if (inputElement instanceof HTMLInputElement) {
      inputElement.value = '';
    }
  };

  public handleRemoveSelected = (id: string) => {
    const multipleUserList: TUser[] = store.getState().multipleUserList;
    const newMultipleUserList = multipleUserList.filter(user => user.id !== Number(id));

    store.set('multipleUserList', newMultipleUserList);
  };

  public async addUser(userId: string) {
    const chatId = store.getState().selectedChat.id;

    await chatListController.addUserToChat(Number(chatId), [Number(userId)]);
    await chatListController.fetchChatList();
    chatViewController.showFeed();
  }

  public handleAddUser = (e: MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }

    if (!e.target.dataset.userId && !e.target.dataset.removeId) {
      return;
    }

    if (store.getState().chatView === 'createMultiple') {
      e.target.dataset.userId && this.handleAddMultipleChat(e.target);
      e.target.dataset.removeId && this.handleRemoveSelected(e.target.dataset.removeId);
    }

    if (store.getState().chatView === 'createSingle') {
      this.handleAddSingleUserChat(e.target);
    }

    if (store.getState().chatView === 'addUser') {
      e.target.dataset.userId && this.addUser(e.target.dataset.userId);
    }
  };

  render() {
    return this.compile(CreateChat.template, this.props);
  }
}
