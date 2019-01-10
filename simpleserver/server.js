const express = require('express');
const app = express();
const bodyParser  = require("body-parser");
require('dotenv').config();
const ENV = process.env.ENV || "development";
const PORT = process.env.PORT || 8080;
const LOCALHOST = process.env.LOCALHOST || 'localhost'

const config = require('./knexfile')[ENV];
const knex = require('knex')(config);
const pirateDb = require('./lib/pirateDb')(knex);

var mp3Duration = require('mp3-duration');

/////////////////////////////////////////////////////////////////////////////////

// var express = require('express');
var http = require('http');
var socketio = require('socket.io');

// var app = express();
var server = http.Server(app);
var websocket = socketio(server);
var damned = 0;
//server.listen(3003, () => console.log('listening on *:3003'));

// The event will be called when a client is connected.
websocket.on('connection', (socket) => {
  console.log('A client just joined on', socket.id);

  socket.on('message', (message) => {
    data = JSON.parse(message);
    if (data.content === 'play') {
      console.log('playing', Date.now());
      console.log(Date.now())
      websocket.send(JSON.stringify({type: 'message', content: false, CT: data.time, ST: Date.now()}));
    } else if (data.content === 'pause') {
      console.log('pausing', Date.now());
      websocket.send(JSON.stringify({type: 'message', content: true, MS: data.MS, CT: data.time, ST: Date.now()}));
    } else if (!isNaN(data.content)) {
      console.log('moving');
      websocket.send(JSON.stringify({type: 'next', content: data.content}));
    } else if (data.content === 'ahoy!') {
      console.log('we got a joiner!');
      damned++;
      websocket.send(JSON.stringify({type: 'count', content: damned}));
    } else if (data.content === 'avast!') {
      console.log('walk the plank ye scurvy dawg!');
      damned--;
      websocket.send(JSON.stringify({type: 'count', content: damned}));
    } else if (data.content === 'request') {
      console.log('arrr requesting sync mr.captain!');
      websocket.send(JSON.stringify({type: 'request', content: 'request'}));
    }
  });
});

////////////////////////////////////////////////////////////////////////////////////////////


app.use(express.static('public'))

app.get("/ships/:id", function(req, res) {
  const { id } = req.params;
  pirateDb.getTracksByShipId(id, (error, tracks) => {
    if (error) {
      console.log('error', error.message)
      res.status(500).json({ error: error.message });
    } else {
      pirateDb.getShipById(id, (error, ship) => {
        if (error) {
          console.log('error', error.message)
          res.status(500).json({ error: error.message });
        } else {
          pirateDb.getCaptainByShipId(id, (error, captain) => {
            if (error) {
              console.log('error', error.message)
              res.status(500).json({ error: error.message });
            } else {
                console.log('Reponse to APP: :', {tracks: tracks, ship: ship[0], captain: captain[0] })
                res.json({
                  tracks: tracks,
                  ship: ship[0],
                  captain: captain[0]
                })
            }
          })
        }
      })
    }
  });
})


app.get("/captain/:id", function(req, res) {
  //should require captain Auth
  const {id} = req.params
  pirateDb.getCaptainById(id, (error, dbResponse) => {
    if (error) {
      console.log('error', error.message)
      res.status(500).json({ error: error.message });
    } else {
      res.json(dbResponse);
    }
  });
})

app.get("/captain/:id/ships", function(req, res) {
  const {id} = req.params
  pirateDb.getShipsByCaptainId(id, (error, dbResponse) => {
    if (error) {
      console.log('error', error.message)
      res.status(500).json({ error: error.message });
    } else {
      res.json(dbResponse);
    }
  });
})


app.get("/captain/find/:email", function(req, res) {
  //should require captain Auth
  const {email} = req.params
  pirateDb.getCaptainIdByEmail(email, (error, dbResponse) => {
    if (error) {
      console.log('error', error.message)
      res.status(500).json({ error: error.message });
    } else {
      res.json(dbResponse);
    }
  });
})

app.get("/ships", function(req, res) {
  const {search} = req.query

  if (parseInt(search) === 1){
    (console.log('1 searched!'))
    pirateDb.getShipsByCaptainId(1, (error, dbResponse) => {
      if (error) {
        console.log('error', error.message)
        res.status(500).json({ error: error.message });
      } else {
        console.log('Reponse to APP from search: ', dbResponse)
        res.json(dbResponse);
      }
    });
  } else {
    console.log(search)
    pirateDb.searchShipsByName(search.toLowerCase(), (error, dbResponse) => {
      if (error) {
        console.log('error', error.message)
        res.status(500).json({ error: error.message });
      } else {
        console.log('Reponse to APP from search: ', dbResponse)
        res.json(dbResponse);
      }
    });
  }
})

app.post("/ships/:id", function(req, res) {
  //should require captain Auth
  const {id} = req.params
  const {timeStamp, currentTrack, currentPositionMillis, paused} = req.query
  console.log('Post from APP: shipID: ', id, 'paused: ', paused, 'Timestamp: ', timeStamp, 'Current Track: ', currentTrack, 'CurrentPosMillis: ', currentPositionMillis)
  pirateDb.updateShip(id, timeStamp, currentTrack, currentPositionMillis, paused, console.log)
  res.send()
})

app.listen(PORT, () => {
    console.log(`live on port http://${LOCALHOST}:${PORT}`);
  });

server.listen(3003, () => console.log('listening on *:3003'));