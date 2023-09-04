import { content, createHTMLelement } from '../../index.js';

const main = createHTMLelement('main', 'contact-main', undefined);

export function createContactPage() {
  main.innerHTML = '';

  const heading = createHTMLelement('h2', 'contact-heading', 'Contact Us');

  const contactInfosContainer = createHTMLelement(
    'div',
    'contact-info-container',
    undefined
  );

  const contact1 = document.createElement('div');
  const contact1Heading = createHTMLelement('h3', undefined, 'Find Us');
  const contact1Content = createHTMLelement(
    'p',
    undefined,
    '121 Rock Sreet, 21 Avenue, New York, NY 92103-9000'
  );

  const contact2 = document.createElement('div');
  const contact2Heading = createHTMLelement('h3', undefined, 'Hours');
  const contact2Content = createHTMLelement(
    'p',
    undefined,
    `Monday - Saturday
    9am - 7pm
    Sunday
    10am - 6pm`
  );

  const contact3 = document.createElement('div');
  const contact3Heading = createHTMLelement('h3', undefined, 'Call Us');
  const contact3Content = createHTMLelement('p', undefined, '1 (234) 567-891');
  const contact3Content2 = createHTMLelement('p', undefined, '2 (345) 333-897');

  content.appendChild(main);
  main.appendChild(heading);

  main.appendChild(contactInfosContainer);

  contactInfosContainer.appendChild(contact1);
  contact1.appendChild(contact1Heading);
  contact1.appendChild(contact1Content);

  contactInfosContainer.appendChild(contact2);
  contact2.appendChild(contact2Heading);
  contact2.appendChild(contact2Content);

  contactInfosContainer.appendChild(contact3);
  contact3.appendChild(contact3Heading);
  contact3.appendChild(contact3Content);
  contact3.appendChild(contact3Content2);
}
