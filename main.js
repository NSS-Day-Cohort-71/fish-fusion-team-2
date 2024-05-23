const { fishMenu } = require('./restaurant.js');

const dailyPriceLimit = 7;
const menu = fishMenu(dailyPriceLimit);
console.log(menu);
