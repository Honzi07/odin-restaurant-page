import './assets/css/reset.css';
import './assets/css/style.css';
import { createHeader } from './assets/components/header.js';
import { createHomePage } from './assets/pages/home.js';
import { createMenuPage } from './assets/pages/menu.js';
import { createContactPage } from './assets/pages/contact.js';
export { content, createHTMLelement };

const content = document.querySelector('#content');

function createHTMLelement(tagName, className, content) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = content;

  return element;
}

createHeader();
createHomePage();
// createMenuPage();

const navEl = document.querySelector('nav');
const menuBtn = document.querySelector('main');
console.log(menuBtn);

// menuBtn.addEventListener('click', function () {
//   content.children[1].remove();
//   createMenuPage();
// });

// navEl.addEventListener('click', function (e) {
//   if (e.target.innerText === 'Home') {
//     content.children[1].remove();
//     createHomePage();
//   } else if (e.target.innerText === 'Menu') {
//     content.children[1].remove();
//     createMenuPage();
//   } else if (e.target.innerText === 'Contact') {
//     content.children[1].remove();
//     createContactPage();
//   }
// });

[navEl, menuBtn].forEach((el) =>
  el.addEventListener('click', (e) => {
    if (e.target.innerText === 'Home') {
      content.children[1].remove();
      createHomePage();
    } else if (
      e.target.innerText === 'Menu' ||
      e.target.innerText === 'View Menu'
    ) {
      content.children[1].remove();
      createMenuPage();
    } else if (e.target.innerText === 'Contact') {
      content.children[1].remove();
      createContactPage();
    }
  })
);
