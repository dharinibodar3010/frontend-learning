function editPlaylistLink(
    index,
    newLinkObj
) {

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


    playlists[index].name =
        newLinkObj.name;

    playlists[index].url =
        newLinkObj.url;


    localStorage.setItem(
        "myPlaylists",
        JSON.stringify(playlists)
    );


    console.log(
        "Playlist updated:",
        playlists[index]
    );
}


function testEditPlaylist() {

    editPlaylistLink(
        0,
        {
            name: "Updated Spotify Playlist",
            url: "https://spotify.com/updated"
        }
    );

    alert("First playlist updated.");
}