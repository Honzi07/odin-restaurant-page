import { content, createHTMLelement } from '../../index.js';

export function createContactPage() {
  const test = createHTMLelement('div', 'test', 'CONTACT');

  content.appendChild(test);
}
