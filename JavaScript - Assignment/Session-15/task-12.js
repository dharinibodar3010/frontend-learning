/*Extend Playlist class by adding addSong(songName) method. Add two songs and display updated playlist.*/

class Playlist {


    constructor(name, songs) {

        this.name = name;
        this.songs = songs;

    }


    addSong(songName) {

        this.songs.push(songName);

    }


    displayPlaylist() {

        console.log(`Playlist: ${this.name}`);

        console.log(this.songs);

    }


}

const playlist = new Playlist(
    "Chill Vibes",
    ["Song 1", "Song 2"]
);



playlist.addSong("Song 3");

playlist.addSong("Song 4");


playlist.displayPlaylist();