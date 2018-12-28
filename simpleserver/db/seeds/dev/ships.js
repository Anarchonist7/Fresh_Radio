
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ships').del()
    .then(function () {
      // Inserts seed entries
      return knex('ships').insert([
        {id: 1, name: "Barbosa's Beats", path: 'http://localhost', user_id: 1, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: 0, pimg: ''},
        {id: 2, name: "Jack's Jams", path: 'http://localhost', user_id: 2, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: 0, pimg: ''},
        {id: 3, name: "Davey's Tunes", path: 'http://localhost', user_id: 3, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: 0, pimg: ''},
      ]);
    });
};
