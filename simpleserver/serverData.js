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

  module.exports = serverData;