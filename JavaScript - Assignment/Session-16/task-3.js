/* Given an array of playlists from a music app like Spotify, each with a name and isPublic property, 
use filter() to create a new array containing only the public playlists.*/

const playlists = [

    {
        name: "Workout Songs",
        isPublic: true
    },

    {
        name: "Private Songs",
        isPublic: false
    },

    {
        name: "Top Hits",
        isPublic: true
    }

];


const publicPlaylists = playlists.filter(
    playlist => playlist.isPublic
);


console.log(publicPlaylists);