const express = require('express');
const app = express();
const bodyParser  = require("body-parser");
require('dotenv').config();
const ENV = process.env.ENV || "development";
const PORT = process.env.PORT || 8080;
const LOCALHOST = process.env.LOCALHOST || '172.218.8.222'

const config = require('./knexfile')[ENV];
const knex = require('knex')(config);
const pirateDb = require('./lib/pirateDb')(knex);

var mp3Duration = require('mp3-duration');

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