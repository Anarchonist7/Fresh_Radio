const express = require('express');
const app = express();
const bodyParser  = require("body-parser");
require('dotenv').config();
const ENV = process.env.ENV || "development";
const PORT = process.env.PORT || 8080;
const LOCALHOST = process.env.LOCALHOST || 'http://localhost'


const serverData = {
  1: {
    ship: {
      name: 'Barbosa Beats',
      currentTrack: 2,
      timeStamp: Date.now()
    },
    tracks: [
      {
        id: 1,
        title: 'Rouge',
        artist: 'TOKiMONSTA',
        album: 'Lune Rouge',
        audioUrl: 'http://' + LOCALHOST + ':' + PORT + '/tune1.mp3'
      },
      {
        id: 2,
        title: 'Estrange (Feat. Io Echo)',
        artist: 'TOKiMONSTA',
        album: 'Lune Rouge',
        audioUrl: 'http://' + LOCALHOST + ':' + PORT + '/tune2.mp3'
      },
      {
        id: 3,
        title: 'Cirrus',
        artist: 'Bonobo',
        album: 'The North Borders',
        audioUrl: 'http://' + LOCALHOST + ':' + PORT + '/tune3.mp3'
      },
      {
        id: 4,
        title: 'Elevate This Sound',
        artist: 'Calyx, Teebee',
        album: 'Elevate This Sound',
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
        title: 'DJ_WISH_TRACK1',
        artist: 'Twenty One Pilots',
        audioUrl: 'http://' + ':' + PORT + '/tune2.mp3'
      },
      {
        id: 2,
        title: 'DJ_WISH_TRACK2',
        artist: 'Bob Marley',
        audioUrl: 'http://' + LOCALHOST + ':' + PORT + '/tune3.mp3'
      }
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

app.get("/ships/:id", function(req, res) {
  const { id } = req.params;
  asyncRequest(id).then((serverResponse, error) => {
    if (error) {
      console.log('error', error.message)
      res.status(500).json({ error: error.message });
    } else {
      console.log(serverResponse)
      res.json(serverResponse); 
    }
  });
});

app.post("/ships/:id", function(req, res) {
  //should require captain Auth
  const {id} = req.params
  const {timeStamp, currentTrack} = req.query
  console.log('shipID: ', id, 'Timestamp: ', timeStamp, 'Current Track: ', currentTrack)
  console.log(req.body)
  serverData[id].ship.currentTrack = currentTrack
  serverData[id].ship.timeStamp = timeStamp
  res.json('recorded current track and timestamp to server data')
  res.send()
})

app.listen(PORT, () => {
    console.log(`live on port http://${LOCALHOST}:${PORT}`);
  });