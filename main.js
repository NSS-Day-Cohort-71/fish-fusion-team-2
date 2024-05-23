const { fishMenu } = require('./restaurant.js');

const dailyPriceLimit = 3.5;
const menu = fishMenu(dailyPriceLimit);
console.log(menu);

// const { boatInventory } = require('./fishingBoat');

// const fishInventory = boatInventory();
// console.log(fishInventory);
