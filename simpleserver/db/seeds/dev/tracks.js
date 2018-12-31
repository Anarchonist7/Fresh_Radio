
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        {id: 1, title: 'Rouge', artist: 'TOKiMONSTA', album: 'Lune Rouge', audio_url: 'http://localhost:8080/tune1.mp3', duration_millis: 133198, ship_id: 1, order: 1},
        {id: 2, title: 'Estrange (Feat. Io Echo)', artist: 'TOKiMONSTA', album: 'Lune Rouge', audio_url: 'http://localhost:8080/tune2.mp3', duration_millis: 258011, ship_id: 1, order: 2},
        {id: 3, title: 'Cirrus', artist: 'Bonobo', album: 'The North Borders', audio_url: 'http://localhost:8080/tune3.mp3', duration_millis: 349257, ship_id: 1, order: 3},
        {id: 4, title: 'Elevate This Sound', artist: 'Calyx, Teebee', album: 'Elevate This Sound', audio_url: 'http://localhost:8080/tune4.mp3', duration_millis: 315637, ship_id: 1, order: 4},
        {id: 5, title: 'Rouge', artist: 'TOKiMONSTA', album: 'The North Borders', audio_url: 'http://localhost:8080/tune1.mp3', duration_millis: 133198, ship_id: 2, order: 1},
        {id: 6, title: 'Estrange (Feat. Io Echo)', artist: 'TOKiMONSTA', album: 'Elevate This Sound', audio_url: 'http://localhost:8080/tune2.mp3', duration_millis: 258011, ship_id: 2, order: 2},
        {id: 7, title: 'Cirrus', artist: 'Bonobo', album: 'Lune Rouge', audio_url: 'http://localhost:8080/tune3.mp3', duration_millis: 315637, ship_id: 3, order: 1},
        {id: 8, title: 'Rouge', artist: 'TOKiMONSTA', album: 'Lune Rouge', audio_url: 'http://localhost:8080/tune1.mp3', duration_millis: 133198, ship_id: 4, order: 1},
        {id: 9, title: 'Estrange (Feat. Io Echo)', artist: 'TOKiMONSTA', album: 'Lune Rouge', audio_url: 'http://localhost:8080/tune2.mp3', duration_millis: 258011, ship_id: 5, order: 1},
        {id: 10, title: 'Cirrus', artist: 'Bonobo', album: 'The North Borders', audio_url: 'http://localhost:8080/tune3.mp3', duration_millis: 349257, ship_id: 6, order: 1},
        {id: 11, title: 'Elevate This Sound', artist: 'Calyx, Teebee', album: 'Elevate This Sound', audio_url: 'http://localhost:8080/tune4.mp3', duration_millis: 315637, ship_id: 7, order: 1},
        {id: 12, title: 'Rouge', artist: 'TOKiMONSTA', album: 'The North Borders', audio_url: 'http://localhost:8080/tune1.mp3', duration_millis: 133198, ship_id: 8, order: 1},
        {id: 13, title: 'Estrange (Feat. Io Echo)', artist: 'TOKiMONSTA', album: 'Elevate This Sound', audio_url: 'http://localhost:8080/tune2.mp3', duration_millis: 258011, ship_id: 9, order: 1},
        {id: 14, title: 'Cirrus', artist: 'Bonobo', album: 'Lune Rouge', audio_url: 'http://localhost:8080/tune3.mp3', duration_millis: 315637, ship_id: 10, order: 1},
        {id: 15, title: 'Estrange (Feat. Io Echo)', artist: 'TOKiMONSTA', album: 'Elevate This Sound', audio_url: 'http://localhost:8080/tune2.mp3', duration_millis: 258011, ship_id: 11, order: 1},
        {id: 16, title: 'Cirrus', artist: 'Bonobo', album: 'Lune Rouge', audio_url: 'http://localhost:8080/tune3.mp3', duration_millis: 315637, ship_id: 12, order: 1},
      ]);
    });
};
