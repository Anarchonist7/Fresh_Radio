
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        {id: 1, title: 'Rouge', artist: 'TOKiMONSTA', album: 'Lune Rouge', audio_url: '/tune1.mp3', duration_millis: 133198, ship_id: 1, order: 1},
        {id: 2, title: 'Estrange (Feat. Io Echo)', artist: 'TOKiMONSTA', album: 'Lune Rouge', audio_url: '/tune2.mp3', duration_millis: 258011, ship_id: 1, order: 2},
        {id: 3, title: 'Cirrus', artist: 'Bonobo', album: 'The North Borders', audio_url: '/tune3.mp3', duration_millis: 349257, ship_id: 1, order: 3},
        {id: 4, title: 'Elevate This Sound', artist: 'Calyx, Teebee', album: 'Elevate This Sound', audio_url: '/tune4.mp3', duration_millis: 315637, ship_id: 1, order: 4},
        {id: 5, title: 'Rouge', artist: 'TOKiMONSTA', album: 'The North Borders', audio_url: '/tune1.mp3', duration_millis: 133198, ship_id: 2, order: 1},
        {id: 6, title: 'Estrange (Feat. Io Echo)', artist: 'TOKiMONSTA', album: 'Elevate This Sound', audio_url: '/tune2.mp3', duration_millis: 258011, ship_id: 2, order: 2},
        {id: 7, title: 'Cirrus', artist: 'Bonobo', album: 'Lune Rouge', audio_url: '/tune3.mp3', duration_millis: 315637, ship_id: 2, order: 3},
      ]);
    });
};
