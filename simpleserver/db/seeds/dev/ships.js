
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ships').del()
    .then(function () {
      // Inserts seed entries
      return knex('ships').insert([
        {id: 1, name: "barbosa-beats", active: false, path: 'no path', user_id: 1, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 3},
        {id: 2, name: "pirate-punk", active: false, path: 'no path', user_id: 1, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 0},
        {id: 3, name: "bass-cannons", active: false, path: 'no path', user_id: 3, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 2},
        {id: 4, name: "synching-sinking-sunk.", active: false, path: 'no path', user_id: 4, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 1},
      ]);
    });
};
