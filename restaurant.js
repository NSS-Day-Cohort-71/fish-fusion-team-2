const { mongerInventory } = require('./fishMonger');

const mongerArray = mongerInventory();
const chefArray = [];
let menuItems = '';

const fishMenu = (budget) => {
  //   for (i = 0; i < mongerArray.length; i++) {
  mongerArray.map((fish) => {
    if (fish.price < budget) {
      fish.amount /= 2;
      chefArray.push(fish);
    }
  });
  //}
  chefArray.map((fish) => {
    menuItems += `
    <h2>${fish.species}</h2>
    <section class="menu__item">${fish.species} Soup</section>
    <section class="menu__item">${fish.species} Sandwich</section>
    <section class="menu__item">Grilled ${fish.species}</section>
    
    `;
  });

  const html = `
<h1>Menu</h1>
  <article class="menu">
  ${menuItems}
  </article>
  `;
  return html;
};
module.exports = { fishMenu };
