const express = require('express');
const app = express();
const bodyParser  = require("body-parser");
require('dotenv').config();
const ENV = process.env.ENV || "development";
const PORT = process.env.PORT || 8080;
const LOCALHOST = process.env.LOCALHOST || 'http://192.168.1.64'
const config = require('./knexfile')[ENV];   
const knex = require('knex')(config);
const pirateDb = require('./lib/pirateDb')(knex);

var mp3Duration = require('mp3-duration');

// mp3Duration('file.mp3', function (err, duration) {
//  if (err) return console.log(err.message);
//  console.log('Your file is ' + duration + ' seconds long');
// });

const serverData = {
  1: {
    ship: {
      name: 'Barbosa Beats',
      currentTrack: 1,
      currentPositionMillis: 0,
      paused: true,
      timeStamp: Date.now()
    },
    tracks: [
      {
        id: 1,
        title: 'Rouge',
        artist: 'TOKiMONSTA',
        album: 'Lune Rouge',
        durationMillis: 133198,
        audioUrl: 'http://' + LOCALHOST + ':' + PORT + '/tune1.mp3'
      },
      {
        id: 2,
        title: 'Estrange (Feat. Io Echo)',
        artist: 'TOKiMONSTA',
        album: 'Lune Rouge',
        durationMillis: 258011,
        audioUrl: 'http://' + LOCALHOST + ':' + PORT + '/tune2.mp3'
      },
      {
        id: 3,
        title: 'Cirrus',
        artist: 'Bonobo',
        album: 'The North Borders',
        durationMillis: 349257,
        audioUrl: 'http://' + LOCALHOST + ':' + PORT + '/tune3.mp3'
      },
      {
        id: 4,
        title: 'Elevate This Sound',
        artist: 'Calyx, Teebee',
        album: 'Elevate This Sound',
        durationMillis: 315637,
        audioUrl: 'http://' + LOCALHOST +  ':' + PORT + '/tune4.mp3'
      }
    ]
  },
  2: {
    ship: {
      name: 'DJ_WISH',
      currentTrack: null,
      timeStamp: Date.now()
    },
    tracks: [
      {
        id: 1,
        title: 'Rouge',
        artist: 'TOKiMONSTA',
        album: 'Lune Rouge',
        durationMillis: 133198,
        audioUrl: 'http://' + LOCALHOST + ':' + PORT + '/tune1.mp3'
      },
      {
        id: 2,
        title: 'Estrange (Feat. Io Echo)',
        artist: 'TOKiMONSTA',
        album: 'Lune Rouge',
        durationMillis: 258011,
        audioUrl: 'http://' + LOCALHOST + ':' + PORT + '/tune2.mp3'
      },
      {
        id: 3,
        title: 'Cirrus',
        artist: 'Bonobo',
        album: 'The North Borders',
        durationMillis: 349257,
        audioUrl: 'http://' + LOCALHOST + ':' + PORT + '/tune3.mp3'
      },
    ]
  }
}

function asyncRequest(shipId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(serverData[shipId])
    }, 1000)
  })
}


app.use(express.static('public'))

app.get("/ships", function(req, res) {
  const {search} = req.query
  console.log(search)
  pirateDb.searchShipsByName(search, (error, dbResponse) => {
    if (error) {
      console.log('error', error.message)
      res.status(500).json({ error: error.message });
    } else {
      console.log('Reponse to APP from search: ', dbResponse)
      res.json(dbResponse);
    }
  });
});

app.get("/ships/:id", function(req, res) {
  const { id } = req.params;
  asyncRequest(id).then((serverResponse, error) => {
    if (error) {
      console.log('error', error.message)
      res.status(500).json({ error: error.message });
    } else {
      console.log('Reponse to APP: :', serverResponse)
      console.log('HERE BE THE TREASURE: ', treasure)
      serverData[id].ship.currentPositionMillis = serverResponse.ship.currentPositionMillis
      console.log('object hunting: ', serverData)
      serverResponse.ship.currentPositionMillis = Math.floor(serverResponse.ship.currentPositionMillis)
      serverResponse.ship.paused = false
      console.log('millisResponse: ', serverResponse.ship.currentPositionMillis)
      res.json(serverResponse);
    }
  });
});

app.post("/ships/:id", function(req, res) {
  //should require captain Auth
  const {id} = req.params
  const {timeStamp, currentTrack, currentPositionMillis, paused} = req.query
  treasure = currentPositionMillis
  console.log('Post from APP: shipID: ', id, 'paused: ', paused, 'Timestamp: ', timeStamp, 'Current Track: ', currentTrack, 'CurrentPosMillis: ', currentPositionMillis)
  serverData[id].ship.currentTrack = currentTrack
  serverData[id].ship.timeStamp = timeStamp
  serverData[id].ship.currentPositionMillis = currentPositionMillis
  serverData[id].ship.paused = paused
  res.json('recorded current track and timestamp to server data')
  res.send()
})

app.listen(PORT, () => {
    console.log(`live on port http://${LOCALHOST}:${PORT}`);
  });