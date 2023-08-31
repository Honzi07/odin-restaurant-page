import { content, createHTMLelement } from '../../index.js';

const main = document.createElement('main');

export function createMenuPage() {
  createMainCourses();
  createDrinks();
}

function createMainCourses() {
  const mainItems = restaurantMenu.mainItems;
  const mainDishContainer = createHTMLelement(
    'section',
    'main-dish-container',
    undefined
  );
  const header = createHTMLelement('h2', undefined, 'Main Dishes');
  mainDishContainer.appendChild(header);

  for (const mainItem of mainItems) {
    const mainName = createHTMLelement('div', 'main-name', mainItem.name);

    const mainDesc = createHTMLelement(
      'div',
      'main-desc',
      mainItem.description
    );

    const mainPrice = createHTMLelement('div', 'main-price', mainItem.price);

    const mainDish = createHTMLelement('div', 'main-dish', undefined);

    mainDishContainer.appendChild(mainDish);
    mainDish.appendChild(mainName);
    mainDish.appendChild(mainDesc);
    mainDish.appendChild(mainPrice);
  }

  content.appendChild(main);
  main.appendChild(mainDishContainer);
}

function createDrinks() {
  const drinks = restaurantMenu.drinks;
  const drinksContainer = createHTMLelement(
    'section',
    'drink-container',
    undefined
  );
  const header = createHTMLelement('h2', undefined, 'Drinks');
  drinksContainer.appendChild(header);

  for (const drink of drinks) {
    const drinkName = createHTMLelement('div', 'drink-name', drink.name);

    const drinkDesc = createHTMLelement('div', 'drink-desc', drink.description);

    const drinkPrice = createHTMLelement('div', 'drink-price', drink.price);

    const mainDrink = createHTMLelement('div', 'drink', undefined);

    drinksContainer.appendChild(mainDrink);
    mainDrink.appendChild(drinkName);
    mainDrink.appendChild(drinkDesc);
    mainDrink.appendChild(drinkPrice);
  }

  content.appendChild(main);
  main.appendChild(drinksContainer);
}

const restaurantMenu = {
  mainItems: [
    {
      name: 'Gummy Bear Pancake Stack',
      description:
        'Fluffy pancakes layered with gummy bear-infused syrup, whipped cream, and gummy bear pieces.',
      price: 11.99,
    },
    {
      name: 'Gummy Bear Pizza',
      description:
        'Thin crust pizza topped with gooey mozzarella, pepperoni, and scattered gummy bear surprises.',
      price: 14.99,
    },
    {
      name: 'Gummy Bear Tacos',
      description:
        'Soft flour tortillas filled with grilled chicken or veggies, lettuce, cheese, and gummy bear salsa.',
      price: 13.99,
    },
    {
      name: 'Gummy Bear Pasta',
      description:
        'Colorful pasta spirals tossed in a creamy alfredo sauce with sautéed vegetables and gummy bear accents.',
      price: 12.99,
    },
    {
      name: 'Gummy Bear Stir-Fry',
      description:
        'A medley of fresh vegetables and your choice of protein stir-fried in a tangy gummy bear glaze, served over steamed rice.',
      price: 15.99,
    },
  ],
  drinks: [
    {
      name: 'Gummy Bear Fizz',
      description:
        'Sparkling blend of lemon-lime soda and gummy bear-infused syrup, garnished with a gummy bear skewer.',
      price: 4.99,
    },
    {
      name: 'Gummy Bear Smoothie',
      description:
        'Refreshing mix of fresh fruits, yogurt, and gummy bear pieces, blended to perfection.',
      price: 5.99,
    },
    {
      name: 'Gummy Bear Lemonade',
      description:
        'Classic lemonade with a twist—gummy bear ice cubes that slowly melt to add extra sweetness.',
      price: 3.99,
    },
    {
      name: 'Gummy Bear Iced Tea',
      description:
        'Chilled iced tea infused with gummy bear essence, perfect for a cool, flavorful sip.',
      price: 3.99,
    },
    {
      name: 'Gummy Bear Mocktail Spritzer',
      description:
        'A mocktail medley of fruit juices, soda water, and gummy bear garnish for a fizzy delight.',
      price: 6.99,
    },
  ],
};
