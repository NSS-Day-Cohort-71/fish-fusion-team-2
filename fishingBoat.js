//import all fish
const { database } = require('./database');

const boatInventory = () => {
  return database;
};

module.exports = { boatInventory };
