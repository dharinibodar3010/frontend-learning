/*Create a JavaScript class named Playlist with constructor accepting name and songs array. 
Create Spotify playlist instance 'Chill Vibes' with 3 songs.*/ 

class Playlist {

    constructor(name, songs){

        this.name = name;
        this.songs = songs;

    }

}


const myPlaylist = new Playlist(
    "Chill Vibes",
    ["Perfect", "Kesariya", "Shape of You"]
);


console.log(myPlaylist);