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
    searchShipsByName: (search, callback) => {
      knex
        .select('users.name as captain', 'ships.name as shipName', 'ships.crew as crewNum')
        .from('ships')
        .where('ships.name', search)
        .join('users', 'ships.user_id', '=', 'users.id')
        .then((results) => {
          callback(null, results);
        })
        .catch(error => callback(error));
    },
    getShipById: (id, callback) => {
      knex
        .select('*')
        .from('ships')
        .where({
        id: id,
        })
        .then((results) => {
          callback(null, results);
        })
        .catch(error => callback(error));
    },
    getTracksByShipId: (id, callback) => {
      knex
        .select('*')
        .from('songs')
        .where({
          ship_id: id,
        })
        .then((results) => {
          callback(null, results);
        })
        .catch(error => callback(error));
    }
  };
};
 