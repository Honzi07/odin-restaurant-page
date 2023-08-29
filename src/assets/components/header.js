import { content, createHTMLelement } from '../../index.js';

export function createHeader() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const h1 = createHTMLelement('h1', undefined, 'Rainbow Bear Bites');
  const ul = document.createElement('ul');

  const menuNames = ['Home', 'Menu', 'Contact'];

  menuNames.forEach((name) => {
    const li = createHTMLelement('li', undefined, name);
    ul.appendChild(li);
  });

  content.appendChild(header);
  header.appendChild(h1);
  header.appendChild(nav);
  nav.appendChild(ul);
}
