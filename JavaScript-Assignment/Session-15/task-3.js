/*Create Playlist class and instance for favorite Spotify playlist and log it.*/

class Playlist {

    constructor(name, songs) {

        this.name = name;
        this.songs = songs;

    }

}


const playlist = new Playlist(
    "My Favorites",
    ["Believer", "Calm Down", "Love Me Like You Do"]
);


console.log(playlist);