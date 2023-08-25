import './assets/css/reset.css';
import './assets/css/style.css';
import { createMenuPage } from './assets/pages/menu.js';
export { content, createHTMLelement };

const content = document.querySelector('#content');

function createHTMLelement(tagName, className, content) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = content;

  return element;
}

createMenuPage();
