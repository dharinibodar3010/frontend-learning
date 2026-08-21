function addPlaylistLinkToMyPlaylists(linkObj) {

    let playlists =
        JSON.parse(
            localStorage.getItem("myPlaylists")
        ) || [];


    playlists.push(linkObj);


    localStorage.setItem(
        "myPlaylists",
        JSON.stringify(playlists)
    );

    console.log(
        "Playlist added:",
        linkObj
    );
}


function testAddMyPlaylist() {

    addPlaylistLinkToMyPlaylists({
        name: "YouTube Music",
        url: "https://youtube.com/music"
    });

    alert("YouTube playlist added.");
}