const PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();
const bodyParser    = require("body-parser");


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
        albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
        audioUrl: 'http://localhost:8080/tune1.mp3'
      },
      {
        id: 2,
        title: 'Estrange (Feat. Io Echo)',
        artist: 'TOKiMONSTA',
        albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
        audioUrl: 'http://localhost:8080/tune2.mp3'
      },
      {
        id: 3,
        title: 'Cirrus',
        artist: 'Bonobo',
        albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
        audioUrl: 'http://localhost:8080/tune3.mp3'
      },
      {
        id: 4,
        title: 'Elevate This Sound',
        artist: 'Calyx, Teebee',
        albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
        audioUrl: 'http://localhost:8080/tune4.mp3'
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
        albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
        audioUrl: 'http://localhost:8080/tune2.mp3'
      },
      {
        id: 2,
        title: 'DJ_WISH_TRACK2',
        artist: 'Bob Marley',
        albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
        audioUrl: 'http://localhost:8080/tune3.mp3'
      }
    ]
  }
}

function asyncRequest(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(serverData[id])
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
  serverData[id].ship.currentTrack = currentTrack
  serverData[id].ship.timeStamp = timeStamp
  res.json('recorded current track and timestamp to server data')

})

app.listen(PORT, () => {
    console.log(`We're live on port ${PORT}!`);
  });