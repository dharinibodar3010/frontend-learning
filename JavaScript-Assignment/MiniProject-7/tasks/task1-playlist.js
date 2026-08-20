function addPlaylistLink(linkObj) {

    let links =
        JSON.parse(
            localStorage.getItem("myLinks")
        ) || [];


    links.push(linkObj);


    localStorage.setItem(
        "myLinks",
        JSON.stringify(links)
    );

    console.log("Playlist link added:", linkObj);
}


// Testing function

function testAddPlaylist() {

    addPlaylistLink({
        name: "Spotify Playlist",
        url: "https://spotify.com/playlist"
    });

    alert("Spotify playlist added.");
}