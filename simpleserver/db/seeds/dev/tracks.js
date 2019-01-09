require('../../../node_modules/dotenv').config();
const ENV = process.env.ENV || "development";
const LOCALHOST = process.env.LOCALHOST || 'localhost'
const PORT = process.env.PORT || 8080;

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('songs').del()
    .then(function () {
      // Inserts seed entries
      return knex('songs').insert([
        {id: 1, title: 'Rouge', artist: 'TOKiMONSTA', album: 'Lune Rouge', audio_url: 'http://' + LOCALHOST + ':' + PORT + '/tune1.mp3', duration_millis: 133198, ship_id: 1, order: 1},
        {id: 2, title: 'Estrange (Feat. Io Echo)', artist: 'TOKiMONSTA', album: 'Lune Rouge', audio_url: 'http://' + LOCALHOST + ':' + PORT + '/tune2.mp3', duration_millis: 258011, ship_id: 1, order: 2},
        {id: 3, title: 'Cirrus', artist: 'Bonobo', album: 'The North Borders', audio_url: 'http://' + LOCALHOST + ':' + PORT + '/tune3.mp3', duration_millis: 349257, ship_id: 1, order: 3},
        {id: 4, title: 'Elevate This Sound', artist: 'Calyx, Teebee', album: 'Elevate This Sound', audio_url: 'http://' + LOCALHOST + ':' + PORT + '/tune4.mp3', duration_millis: 315637, ship_id: 1, order: 4},
        {id: 5, title: 'Truth', artist: 'Alexander', album: 'Alexander', duration_millis: 260963, audio_url: 'http://' + LOCALHOST + ':' + PORT + '/03%20Truth.mp3', ship_id: 3, order: 5},
        {id: 6, title: 'Ghost Ship', artist: 'Bonobo', album: 'Black Sands Remixed', duration_millis: 241789, audio_url: 'http://' + LOCALHOST + ':' + PORT + '/08+Ghost+Ship.mp3', ship_id: 1, order: 6},
        {id: 7, title: "Captain Kelly's Kitchen", artist: 'Dropkick Murphys', album: "The Warrior's Code", duration_millis: 168881, audio_url: 'http://' + LOCALHOST + ':' + PORT + "/03%20Captain%20Kelly's%20Kitchen.mp3", ship_id: 2, order: 7},
        {id: 8, title: "I'm Shipping Up to Boston", artist: 'Dropkick Murphys', album: "The Warrior's Code", duration_millis: 166504, audio_url: 'http://' + LOCALHOST + ':' + PORT + "/11%20I'm%20Shipping%20Up%20to%20Boston.mp3", ship_id: 2, order: 8},
        {id: 9, title: 'Salty Dog', artist: 'Flogging Molly', album: 'Swagger', duration_millis: 141453, audio_url: 'http://' + LOCALHOST + ':' + PORT + '/01%20Salty%20Dog.mp3', ship_id: 2, order: 9},
        {id: 10, title: 'Sloop John B', artist: 'Me First And The Gimme Gimmes', album: "Blow in the Wind", duration_millis: 129384, audio_url: 'http://' + LOCALHOST + ':' + PORT + "/Blow%20In%20The%20Wind/02%20Sloop%20John%20B.mp3", ship_id: 2, order: 10},
        {id: 11, title: "He's A Pirate", artist: 'Pirates of the Caribean', album: 'Pirates of the Caribean', duration_millis: 173270, audio_url: 'http://' + LOCALHOST + ':' + PORT + "/He's%20A%20Pirate.mp3", ship_id: 2, order: 11},
      ]);
    });
};
