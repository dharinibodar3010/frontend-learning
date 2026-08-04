/*Write a function fetchSongLyrics(song, callback) that simulates fetching lyrics from a server using 
setTimeout.*/

function fetchSongLyrics(song, callback){

    setTimeout(function(){

        let lyrics = `Lyrics of ${song} are loaded`;

        callback(lyrics);

    },2000);

}


fetchSongLyrics("Kesariya", function(result){

    console.log(result);

});