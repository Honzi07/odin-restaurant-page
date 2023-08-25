import { content, createHTMLelement } from '../../index.js';

export function createMenuPage() {
  const header = createHTMLelement('header', undefined, undefined);
  content.appendChild(header);

  const nav = createHTMLelement('nav', 'nav', undefined);
  header.appendChild(nav);
}
