function validateLink(url) {

    return (
        url.startsWith("https://") &&
        (
            url.includes("spotify.com") ||
            url.includes("youtube.com")
        )
    );
}


function checkPlaylistLink() {

    const input =
        document.getElementById(
            "playlistInput"
        );

    const error =
        document.getElementById(
            "playlistError"
        );


    const url =
        input.value.trim();


    if (!validateLink(url)) {

        error.textContent =
            "Invalid playlist URL. Please enter a Spotify or YouTube URL.";

        error.className =
            "error";

        return;
    }


    error.textContent =
        "Valid playlist URL.";

    error.className =
        "success";
}