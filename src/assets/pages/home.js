import { content, createHTMLelement } from '../../index.js';
import homeImg from '../images/home.png';

const main = createHTMLelement('main', 'home-main', undefined);

export function createHomePage() {
  main.innerHTML = '';

  const imageContainer = createHTMLelement('div', 'image-container', undefined);
  const img = document.createElement('img');
  img.src = homeImg;
  img.setAttribute('alt', 'sweets on a plate');

  const introContainer = createHTMLelement('div', 'intro-container', undefined);

  const introHeading = createHTMLelement(
    'h1',
    'intro-heading',
    'Vibrant gummy-inspired treats crafted daily with love.'
  );

  const introduction =
    'Welcome to Rainbow Bear Bites, where gummy bears meet culinary magic. Dive into a world of playful, vibrant flavors and whimsy. Join us for a burst of joy in every bite!';

  const introductionEl = createHTMLelement(
    'div',
    'intro-message',
    introduction
  );

  const link = createHTMLelement('a', undefined, 'View Menu');

  content.appendChild(main);
  main.appendChild(imageContainer);
  imageContainer.appendChild(img);
  main.appendChild(introContainer);
  introContainer.appendChild(introHeading);
  introContainer.appendChild(introductionEl);
  introContainer.appendChild(link);
}
