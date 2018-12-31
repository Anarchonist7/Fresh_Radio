
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ships').del()
    .then(function () {
      // Inserts seed entries
      return knex('ships').insert([
        {id: 1, name: "barbosa-beats", active: false, path: 'http://localhost', user_id: 1, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 99},
        {id: 2, name: "jacks-jams", active: false, path: 'http://localhost', user_id: 2, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 0},
        {id: 3, name: "daveys-tunes", active: false, path: 'http://localhost', user_id: 3, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 0},
        {id: 4, name: "bassoween", active: false, path: 'http://localhost', user_id: 4, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 0},
        {id: 5, name: "deep-dark-disco", active: false, path: 'http://localhost', user_id: 4, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 0},
        {id: 6, name: "hip-hop-hallow", active: false, path: 'http://localhost', user_id: 4, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 0},
        {id: 7, name: "lit-spring", active: false, path: 'http://localhost', user_id: 4, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 0},
        {id: 8, name: "gapper-day", active: false, path: 'http://localhost', user_id: 4, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 1},
        {id: 9, name: "slushryder", active: false, path: 'http://localhost', user_id: 4, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 0},
        {id: 10, name: "snowboarding-dubstep", active: false, path: 'http://localhost', user_id: 4, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 0},
        {id: 11, name: "snowboarding-chillstep", active: false, path: 'http://localhost', user_id: 4, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 2},
        {id: 12, name: "doing-less", active: false, path: 'http://localhost', user_id: 4, current_track: 0, current_position_millis: 0, is_paused: true, time_stamp: Date.now(), pimg: '', crew: 0},
      ]);
    });
};
