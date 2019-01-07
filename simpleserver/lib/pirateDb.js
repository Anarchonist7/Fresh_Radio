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
    getShipsByCaptainId: (id, callback) => {
      knex
        .select('*')
        .from('ships')
        .where({user_id: id})
        .then((results) => {
          callback(null, results);
        })
        .catch(error => callback(error));
    },
    getCaptainById: (id, callback) => {
      knex
      .select('email', 'id', 'name')
      .from('users')
      .where({id: id})
      .then((results) => {
        callback(null, results);
      })
      .catch(error => callback(error));
    },
    getCaptainIdByEmail: (email, callback) => {
      knex
      .select('id')
      .from('users')
      .where({email: email})
      .then((results) => {
        callback(null, results);
      })
      .catch(error => callback(error));
    },
    searchShipsByName: (search, callback, numResults) => {
      knex
        .select('users.name as captain', 'ships.name as shipName', 'ships.crew as crewNum', 'ships.id as shipId')
        .from('ships')
        .whereRaw(`LOWER(ships.name) LIKE ?`, [`%${search}%`])
        .orWhereRaw(`LOWER(users.name) LIKE ?`, [`%${search}%`])
        .limit(numResults)
        .orderBy('crew')
        .join('users', 'ships.user_id', '=', 'users.id')
        .then((results) => {
          callback(null, results);
        })
        .catch(error => callback(error));
    },
    getShipById: (id, callback) => {
      knex
        .select('id', 'name', 'current_track as currentTrack', 'current_position_millis as currentPositionMillis', 'is_paused as paused', 'time_stamp as timeStamp')
        .from('ships')
        .where({id: id})
        .then((results) => {
          callback(null, results);
        })
        .catch(error => callback(error));
    },
    getTracksByShipId: (id, callback) => {
      knex
        .select('id', 'title', 'artist', 'album', 'duration_millis as durationMillis', 'audio_url as audioUrl')
        .from('songs')
        .where({ship_id: id})
        .then((results) => {
          callback(null, results);
        })
        .catch(error => callback(error));
    },
    getCaptainByShipId: (id, callback) => {
      knex
        .select('users.name as captainName', 'users.id as captainId')
        .from('ships')
        .where('ships.id', id)
        .join('users', 'ships.user_id', '=', 'users.id')
        .then((results) => {
          callback(null, results);
        })
        .catch(error => callback(error));
    },
    updateShip: (id, timeStamp, currentTrack, currentPositionMillis, paused, callback) => {
      console.log('|--> update ship triggered')
      knex
        .select('*')
        .from('ships')
        .where({id: id})
        .update({
          time_stamp: timeStamp,
          current_track: currentTrack,
          current_position_millis: currentPositionMillis,
          is_paused: paused
        })
        .then((results) => {
          callback(null, results);
        })
        .catch(error => callback(error));
    }
  };
};
 