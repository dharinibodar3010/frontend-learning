/*Add method getSongCount() that returns total songs.*/

class Playlist {

    constructor(name, songs) {

        this.name = name;
        this.songs = songs;

    }


    getSongCount() {

        return this.songs.length;

    }

}


const playlist = new Playlist(
    "Chill Vibes",
    ["A", "B", "C"]
);


console.log("Total Songs:", playlist.getSongCount());