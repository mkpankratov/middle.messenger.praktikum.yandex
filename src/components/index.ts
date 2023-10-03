import { Button } from './button/index.ts';
import { ListItem } from './chat/components/list/components/listItem/index.ts';
import { List } from './chat/components/list/index.ts';
import { CreateGroupChatButton } from './chat/components/viewChat/components/createChat/components/createGroupChatButton/index.ts';
import { SelectedUser } from './chat/components/viewChat/components/createChat/components/selectedUser/index.ts';
import { SuggestSingleUser } from './chat/components/viewChat/components/createChat/components/suggestSingleUser/index.ts';
import { CreateChat } from './chat/components/viewChat/components/createChat/index.ts';
import { FeedItem } from './chat/components/viewChat/components/feed/components/feedItem/index.ts';
import { Feed } from './chat/components/viewChat/components/feed/index.ts';
import { RemoveUser } from './chat/components/viewChat/components/removeUser/index.ts';
import { ViewChat } from './chat/components/viewChat/index.ts';
import { Chat } from './chat/index.ts';
import { Dropdown } from './dropdown/index.ts';
import { Error } from './error/index.ts';
import { ErrorMessage } from './form/components/errorMessage/index.ts';
import { Fieldset } from './form/components/fieldset/index.ts';
import { Input } from './form/components/input/index.ts';
import { Submit } from './form/components/submit/index.ts';
import { Form } from './form/index.ts';
import { NavLink } from './navlink/index.ts';
import { Page } from './page/index.ts';
import { ProfileReadonly } from './profile/components/readonly/index.ts';

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
