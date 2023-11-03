import type { Block } from 'classes/Block/index.ts';

export function renderDOM(query: string, block: Block) {
  const root = document.querySelector(query);

  if (!root) {
    return null;
  }

  root.replaceWith(block.getContent()!);
  return root;
}
