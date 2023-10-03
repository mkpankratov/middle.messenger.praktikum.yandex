import type { TUser } from '../../api/AuthAPI/types.ts';
import { chatListAPI } from '../../api/ChatListAPI/index.ts';
import type { TChatInfo, TChatsAPI } from '../../api/ChatListAPI/types.ts';
import { store } from '../../classes/Store/index.ts';
import { messageListController } from '../../controllers/MessageListController/index.ts';

export class ChatListController {
  private readonly api: TChatsAPI;

  constructor() {
    this.api = chatListAPI;
  }

  async create(title: string) {
    return await this.api.create(title);
  }

  async createNewChat(title: string, idArray: number[]) {
    const newChatId = await this.create(title);

    await this.addUserToChat(newChatId, idArray);
    await this.fetchChatList();
  }

  async createGroupChat() {
    const multipleUser: TUser[] = store.getState().multipleUserList;
    const idArr = multipleUser.map(i => i.id);
    const title = multipleUser.map(i => i.login).join(', ');

    this.createNewChat(title, idArr);
  }

  async fetchChatList() {
    const chatList = await this.api.read();

    this.selectChat({ ...chatList[0] });

    store.set('chatList', chatList);
  }

  addUserToChat(id: number, userId: number[]) {
    this.api.addUsers(id, [...userId]);
  }

  deleteUserFromChat(userId: number[], id: number) {
    this.api.deleteUsers([...userId], id);
  }

  async delete(id: number) {
    await this.api.delete(id);
    this.fetchChatList();
  }

  async deleteSelectedChat() {
    const chatId = store.getState().selectedChat.id;

    if (typeof chatId !== 'number') {
      return;
    }

    await this.api.delete(chatId);
    this.fetchChatList();
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  async checkSelectedChatGroup(chatId: number) {
    const userArr = await this.api.getUsers(chatId);

    if (userArr?.length > 1) {
      return true;
    }

    return false;
  }

  async getUsers(chatId: number) {
    return await this.api.getUsers(chatId);
  }

  async selectChat(chatObject: TChatInfo) {
    store.set('selectedChat', chatObject);
    messageListController.selectChat(chatObject);

    if (!chatObject.id) {
      return;
    }

    const isSelectedChatGroup = await this.checkSelectedChatGroup(chatObject.id);

    store.set('isSelectedChatGroup', isSelectedChatGroup);

    if (isSelectedChatGroup) {
      store.set('groupChatUserList', await this.getUsers(chatObject.id));
    }

    const token = await this.getToken(chatObject.id);

    await messageListController.connect(chatObject.id, token);
  }
}

export const chatListController = new ChatListController();
