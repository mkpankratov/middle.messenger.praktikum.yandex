import { Button } from '@components/button';
import { Chat } from '@components/chat';
import { List } from '@components/chat/components/list';
import { ListItem } from '@components/chat/components/list/components/listItem/index';
import { ViewChat } from '@components/chat/components/viewChat';
import { CreateChat } from '@components/chat/components/viewChat/components/createChat';
import { CreateGroupChatButton } from '@components/chat/components/viewChat/components/createChat/components/createGroupChatButton';
import { SelectedUser } from '@components/chat/components/viewChat/components/createChat/components/selectedUser';
import { SuggestSingleUser } from '@components/chat/components/viewChat/components/createChat/components/suggestSingleUser';
import { Feed } from '@components/chat/components/viewChat/components/feed';
import { FeedItem } from '@components/chat/components/viewChat/components/feed/components/feedItem/index';
import { RemoveUser } from '@components/chat/components/viewChat/components/removeUser';
import { Dropdown } from '@components/dropdown';
import { Error } from '@components/error';
import { Form } from '@components/form';
import { ErrorMessage } from '@components/form/components/errorMessage';
import { Fieldset } from '@components/form/components/fieldset';
import { Input } from '@components/form/components/input';
import { Submit } from '@components/form/components/submit';
import { NavLink } from '@components/navlink';
import { Page } from '@components/page';
import { ProfileReadonly } from '@components/profile/components/readonly';

export const componentList = {
  Chat,
  Dropdown,
  List,
  ListItem,
  Feed,
  FeedItem,
  CreateChat,
  SuggestSingleUser,
  SelectedUser,
  CreateGroupChatButton,
  RemoveUser,
  ViewChat,
  Error,
  Fieldset,
  Submit,
  Page,
  ProfileReadonly,
  NavLink,
  Button,
  Input,
  ErrorMessage,
  Form,
};
