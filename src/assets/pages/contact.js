import { content, createHTMLelement } from '../../index.js';

const main = createHTMLelement('main', 'contact-main', undefined);

export function createContactPage() {
  main.innerHTML = '';
  createContactForm();
  createContactInfo();
}

function createContactForm() {
  const form = document.createElement('form');
  const fieldset = document.createElement('fieldset');

  const emailContainer = document.createElement('div');
  const emailLabel = createHTMLelement('label', undefined, 'Email');
  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'email');
  emailInput.setAttribute('name', 'email');
  emailInput.setAttribute('placeholder', 'Enter your email');
  emailLabel.htmlFor = emailInput.id;

  const nameContainer = document.createElement('div');
  const nameLabel = createHTMLelement('label', undefined, 'Name');
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('placeholder', 'Enter your name');
  nameLabel.htmlFor = nameInput.id;

  const button = createHTMLelement('button', undefined, 'Submit');
  button.addEventListener('click', (e) => {
    e.preventDefault();
  });

  main.appendChild(form);
  form.appendChild(fieldset);
  fieldset.appendChild(emailContainer);
  emailContainer.appendChild(emailLabel);
  emailContainer.appendChild(emailInput);
  fieldset.appendChild(nameContainer);
  nameContainer.appendChild(nameLabel);
  nameContainer.appendChild(nameInput);
  form.appendChild(button);
}

function createContactInfo() {
  const contactInfoContainer = createHTMLelement(
    'section',
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

  main.appendChild(contactInfoContainer);

  contactInfoContainer.appendChild(contact1);
  contact1.appendChild(contact1Heading);
  contact1.appendChild(contact1Content);

  contactInfoContainer.appendChild(contact2);
  contact2.appendChild(contact2Heading);
  contact2.appendChild(contact2Content);

  contactInfoContainer.appendChild(contact3);
  contact3.appendChild(contact3Heading);
  contact3.appendChild(contact3Content);
  contact3.appendChild(contact3Content2);
}
