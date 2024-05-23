const { boatInventory } = require('./fishingBoat');

const fishInventory = boatInventory();
const mongerArray = [];
const chefArray = [];

const sortFishForMonger = () => {
  //filers fish for monger
  for (const fish of fishInventory) {
    if (fish.amount >= 10 && fish.price <= 7.5) {
      fish.amount = 10;
      mongerArray.push(fish);
    }
  }
  return mongerArray;
};

const mongerInventory = (budget) => {
  const mongersFish = sortFishForMonger();
  //filters monger's fish for restaurant
  for (const fish of mongersFish) {
    if (fish.price < budget) {
      fish.amount /= 2;
      chefArray.push(fish);
    }
  }
  return chefArray;
};
module.exports = { mongerInventory };
