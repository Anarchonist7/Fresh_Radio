// Defines helper functions for database, using knex

module.exports = function pirateDb(knex) {
  return {
    getShips: (callback) => {
      knex
        .select('*')
        .from('ships')
        .then((results) => {
          callback(null, results);
        })
        .catch(error => callback(error));
    },
    getShipsByName: (smoothieId, callback) => {
      knex
        .select('*')
        .from('ships')
        .where({
          id: smoothieId,
        })
        .then((results) => {
          callback(null, results);
        })
        .catch(error => callback(error));
    }
  };
};
