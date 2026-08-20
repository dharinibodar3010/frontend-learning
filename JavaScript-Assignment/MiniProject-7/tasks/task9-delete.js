function deletePlaylistLink(index) {

    let playlists =
        JSON.parse(
            localStorage.getItem("myPlaylists")
        ) || [];


    if (
        index < 0 ||
        index >= playlists.length
    ) {

        console.log(
            "Invalid playlist index."
        );

        return;
    }


    playlists.splice(index, 1);


    localStorage.setItem(
        "myPlaylists",
        JSON.stringify(playlists)
    );


    console.log(
        "Playlist deleted."
    );
}


function testDeletePlaylist() {

    deletePlaylistLink(0);

    alert("First playlist deleted.");
}