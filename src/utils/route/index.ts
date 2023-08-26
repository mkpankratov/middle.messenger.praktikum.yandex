import { pageList } from '@pages/index';
import type { TPageName } from '@utils/route/types';

export function routeTo(name: TPageName) {
  if (!name) {
    throw `Не указан путь`;
  }

  if (!pageList[name]) {
    throw `Нет страницы ${name}`;
  }

  const Page = pageList[name];
  const page = new Page();

  const root = document.querySelector('#app')!;

  root.replaceWith(page.getContent()!);

  page.dispatchComponentDidMount();
}
