import { Block } from '../../../../../../../../classes/Block/index.ts';
import { withStore } from '../../../../../../../../classes/Store/index.ts';
import templateString from './template.ts';

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
