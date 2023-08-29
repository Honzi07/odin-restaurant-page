import { content, createHTMLelement } from '../../index.js';

export function createHomePage() {
  const test = createHTMLelement('main', 'test', undefined);
  const test2 = createHTMLelement('div', 'test2', 'Appending this div to main');

  content.appendChild(test);
  test.appendChild(test2);
}
