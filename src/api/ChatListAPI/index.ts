import type { TUser } from '@api/AuthAPI/types';
import BaseAPI from '@api/BaseAPI';
import type { TChatInfo, TCreateResponse } from '@api/ChatListAPI/types';

export class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  async create(title: string) {
    const response = await this.http.post<TCreateResponse>('/', { title });

    return response.id;
  }

  public delete(id: number) {
    return this.http.delete('/', { chatId: id });
  }

  public deleteUsers(userArr: number[], chatId: number) {
    return this.http.delete('/users', { users: userArr, chatId });
  }

  read(): Promise<TChatInfo[]> {
    return this.http.get('/');
  }

  getUsers(id: number): Promise<Array<TUser & { role: string }>> {
    return this.http.get(`/${id}/users`);
  }

  addUsers(id: number, users: number[]): Promise<unknown> {
    return this.http.put('/users', { users, chatId: id });
  }

  async getToken(id: number): Promise<string> {
    const response = await this.http.post<{ token: string }>(`/token/${id}`);

    return response.token;
  }

  update = undefined;
}

export const chatListAPI = new ChatsAPI();
