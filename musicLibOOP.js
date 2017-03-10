var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },

  printPlaylists: function() {
    for (var i in this.playlists) {
      var allPlayList = this.playlists[i];
      console.log(`${allPlayList.id}: ${allPlayList.name} - ${allPlayList.tracks.length} tracks`);
    }
  },

  printTracks: function() {
    for (var tracks in this.tracks) {
      var tr = this.tracks[tracks];
      console.log(`${tr.id}: ${tr.name} by ${tr.artist} (${tr.album})`);
    }
  },

  printPlaylist: function(playlistId) {
    var pl = this.playlists[playlistId];
    var tr = this.tracks;
    console.log(`${pl.id}: ${pl.name} - ${pl.tracks.length} tracks`);
    for (var track of pl.tracks) {
      console.log(`${tr[track].id}: ${tr[track].name} by ${tr[track].artist} (${tr[track].album})`);
    }
  },

  addTrackToPlaylist: function(trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
    //push a track to end of a playlist
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function(name, artist, album) {
    var id = "t" + this.uid();
    library.tracks[id] = {
      "id": id,
      "name": name,
      "artist": artist,
      "album": album
    }
  },

  addPlaylist: function(name) {
    var id = "p" + this.uid();
    library.playlists[id] = {
      "id": id,
      "name": name,
      "tracks": []
    };
  },

  // STRETCH:
  printSearchResults: function(query) {
    var keyword = query.toLowerCase();
    for (var string in this.tracks) {
      var tr = this['tracks'][string];
      if (tr['name'].toLowerCase().search(keyword) != -1 ||
        tr['artist'].toLowerCase().search(keyword) != -1 ||
        tr['album'].toLowerCase().search(keyword) != -1) {
        console.log(`Name: ${tr.name}, Artist: ${tr.artist}, Album: ${tr.album}`);
      }
    }
  },



}

library.printPlaylists();
console.log("");
library.printTracks();
console.log("");
library.printPlaylist("p01");
console.log("");
library.addTrackToPlaylist("t01", "p02");
library.addTrack("track4", "buddy", "album5");
library.addPlaylist("p");
library.printSearchResults("Code Monk");