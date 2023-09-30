import type { TUser } from '@api/AuthAPI/types';

export type TMessage = {
  chat_id: number;
  time: string;
  type: string;
  user_id: number;
  content: string;
  file?: TFile;
  user?: TUser;
};

type TFile = {
  id: number;
  user_id: number;
  path: string;
  filename: string;
  content_type: string;
  content_size: number;
  upload_date: string;
};
