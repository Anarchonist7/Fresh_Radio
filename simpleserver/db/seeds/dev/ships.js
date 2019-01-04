
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ships').del()
    .then(function () {
      // Inserts seed entries
      return knex('ships').insert([
        {id: 1, name: "barbosa-beats", active: false, path: 'http://192.168.1.116', user_id: 1, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 99},
        {id: 2, name: "jacks-jams", active: false, path: 'http://192.168.1.116', user_id: 2, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 44},
        {id: 3, name: "daveys-tunes", active: false, path: 'http://192.168.1.116', user_id: 3, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 0},
        {id: 4, name: "doing-less", active: false, path: 'http://192.168.1.116', user_id: 4, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 1},
      ]);
    });
};
