import { Block } from '@classes/Block';
import { withStore } from '@classes/Store';
import templateString from '@components/chat/components/viewChat/components/createChat/components/selectedUser/template';

export class SelectedUserBase extends Block {
  static template = this.hbsCompile(templateString);

  render() {
    this.props.hasData = Boolean(this.props.multipleUserList?.length) || false;
    return this.compile(SelectedUserBase.template, this.props);
  }
}

const withSelectedUserList = withStore(state => {
  return {
    multipleUserList: state.multipleUserList || [],
  };
});

export const SelectedUser = withSelectedUserList(SelectedUserBase);
