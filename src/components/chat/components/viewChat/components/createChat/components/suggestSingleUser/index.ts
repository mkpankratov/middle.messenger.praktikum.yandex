import { Block } from '../../../../../../../../classes/Block/index.ts';
import { withStore } from '../../../../../../../../classes/Store/index.ts';
import templateString from './template.ts';

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
