const { mongerInventory } = require('./fishMonger');

let menuItems = '';
const dailyPriceLimit = 7;

//get chef approved fish based on budget
const chefArray = mongerInventory(dailyPriceLimit);

//organize the menu
const fishMenu = () => {
  const menuItems = chefArray.map((fish) => {
    return `
    <h2>${fish.species}</h2>
    <section class="menu__item">${fish.species} Soup</section>
    <section class="menu__item">${fish.species} Sandwich</section>
    <section class="menu__item">Grilled ${fish.species}</section>
    
    `;
  });
  const html = `
<h1>Menu</h1>
  <article class="menu">
  ${menuItems.join('')}
  </article>
  `;
  return html;
};
module.exports = { fishMenu };
