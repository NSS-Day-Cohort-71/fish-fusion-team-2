const { boatInventory } = require('./fishingBoat');

const fishInventory = boatInventory();
let mongerArray = [];
const mongerInventory = () => {
  fishInventory.map((fish) => {
    if (fish.amount >= 10 && fish.price <= 7.5) {
      fish.amount = 10;
      mongerArray.push(fish);
    }
  });

  return mongerArray;
};
module.exports = { mongerInventory };
