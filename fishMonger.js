const { boatInventory } = require('./fishingBoat');

const fishInventory = boatInventory();
let mongerArray = [];
const mongerInventory = () => {
  fishInventory.map((fish) => {
    if (fish.amount >= 10 && fish.price <= 7.5) {
      mongerArray.push(fish);
    }
  });
  mongerArray.map((fish) => {
    fish.amount = 10;
  });

  return mongerArray;
};
module.exports = { mongerInventory };
