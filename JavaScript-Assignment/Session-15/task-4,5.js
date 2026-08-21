/*Add method displayPlaylist() that logs playlist name and songs.*/

class Playlist {

    constructor(name, songs) {

        this.name = name;
        this.songs = songs;

    }


    displayPlaylist() {

        console.log(`Playlist: ${this.name}`);

        console.log(`Songs: ${this.songs.join(", ")}`);

    }

}


const playlist = new Playlist(
    "Chill Vibes",
    ["Song 1", "Song 2", "Song 3"]
);


playlist.displayPlaylist();