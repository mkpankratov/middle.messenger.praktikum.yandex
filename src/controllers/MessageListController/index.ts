import type { TChatInfo } from '../../api/ChatListAPI/types.ts';
import { store } from '../../classes/Store/index.ts';
import { WSTransport, WSTransportEvents } from '../../classes/WSTransport/index.ts';
import type { TMessage } from '../../controllers/MessageListController/types.ts';

class MessageListController {
  private sockets: Map<number, WSTransport> = new Map();
  public selectedChat: TChatInfo = {} as TChatInfo;
  async connect(id: number, token: string) {
    if (this.sockets.has(id)) {
      return;
    }

    const userId = store.getState().user.id;

    const wsTransport = new WSTransport(`wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`);

    this.sockets.set(id, wsTransport);

    await wsTransport.connect();

    this.subscribe(wsTransport, id);
    this.fetchOldMessages(id);
  }

  sendMessage(message: string) {
    const socket = this.sockets.get(this.selectedChat.id || 0);

    if (!socket) {
      throw new Error(`Chat ${this.selectedChat} is not connected`);
    }

    socket.send({
      type: 'message',
      content: message,
    });
  }

  fetchOldMessages(id: number) {
    const socket = this.sockets.get(id);

    if (!socket) {
      throw new Error(`Chat ${id} is not connected`);
    }

    socket.send({ type: 'get old', content: '0' });
  }

  closeAll() {
    Array.from(this.sockets.values()).forEach(socket => socket.close());
  }

  public selectChat(selectedChatObject: TChatInfo) {
    this.selectedChat = selectedChatObject;
  }

  private onMessage(id: number, messageList: TMessage | TMessage[]) {
    let messagesToAdd: TMessage[] = [];

    if (Array.isArray(messageList)) {
      messagesToAdd = messageList.reverse();
    } else {
      messagesToAdd.push(messageList);
    }

    const currentMessages = (store.getState().messageList || {})[id] || [];

    messagesToAdd = [...currentMessages, ...messagesToAdd];

    store.set(`messageList.${id}`, messagesToAdd);
  }

  private onClose(id: number) {
    this.sockets.delete(id);
  }

  private subscribe(transport: WSTransport, id: number) {
    transport.on(
      WSTransportEvents.Message,
      message => message && this.onMessage(id, message as TMessage | TMessage[]),
    );
    transport.on(WSTransportEvents.Close, () => this.onClose(id));
  }
}

export const messageListController = new MessageListController();
