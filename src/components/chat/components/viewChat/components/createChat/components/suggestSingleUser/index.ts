import { Block } from '@classes/Block';
import { withStore } from '@classes/Store';
import templateString from '@components/chat/components/viewChat/components/createChat/components/suggestSingleUser/template';

export class SuggestSingleUserBase extends Block {
  static template = this.hbsCompile(templateString);

  render() {
    this.props.hasData = Boolean(this.props.searchUserList?.length);
    return this.compile(SuggestSingleUserBase.template, this.props);
  }
}

const withSearchdUserList = withStore(state => {
  return {
    searchUserList: state.searchUserList,
  };
});

export const SuggestSingleUser = withSearchdUserList(SuggestSingleUserBase);
