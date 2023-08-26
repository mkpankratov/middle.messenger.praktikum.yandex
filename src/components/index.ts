import { Chat } from '@components/chat';
import { Feed } from '@components/chat/components/feed';
import { FeedItem } from '@components/chat/components/feed/components/feedItem/index';
import { List } from '@components/chat/components/list';
import { ListItem } from '@components/chat/components/list/components/listItem/index';
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
  List,
  ListItem,
  Feed,
  FeedItem,
  Error,
  Fieldset,
  Submit,
  Page,
  ProfileReadonly,
  NavLink,
  Input,
  ErrorMessage,
  Form,
};
