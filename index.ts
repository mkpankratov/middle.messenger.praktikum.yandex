import { ComponentRegister } from '@classes/ComponentRegister';
import { componentList } from '@components/index';
import { pageList } from '@pages/index';
import { routeTo } from '@utils/route';

document.addEventListener('DOMContentLoaded', () => {
  new ComponentRegister({ ...componentList, ...pageList });
  routeTo('Home');
});
