function validateSpotifyURL(url) {

    if (!url.startsWith("https://open.spotify.com/")) {

        throw new Error("Invalid Spotify URL");

    }

    return true;
}


function testSpotifyURL() {

    try {

        validateSpotifyURL(
            "https://spotify.com/playlist"
        );

        console.log("Valid Spotify URL");

    } catch (error) {

        console.error(error.message);

    }
}