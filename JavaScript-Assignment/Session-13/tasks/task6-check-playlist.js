function checkPlaylistURL(url) {

    if (
        !url.startsWith(
            "https://open.spotify.com/"
        )
    ) {

        throw new Error(
            "Invalid Spotify URL"
        );

    }

    return true;
}


function testPlaylistURL() {

    try {

        checkPlaylistURL(
            "https://spotify.com/playlist"
        );

        console.log(
            "Playlist URL is valid"
        );

    } catch (error) {

        console.log(
            error.message
        );

    } finally {

        console.log(
            "Validation complete"
        );

    }
}