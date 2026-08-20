function addNewPlaylist() {

    const playlist = {

        name: "My Favorite Songs",

        description:
            "My favorite music playlist"

    };


    fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {

            method: "POST",

            headers: {

                "Content-Type":
                    "application/json"

            },

            body: JSON.stringify(playlist)

        }
    )

    .then(response => response.json())

    .then(data => {

        console.log(
            "Playlist response:",
            data
        );

    })

    .catch(error => {

        console.error(
            "Error adding playlist:",
            error
        );

    });
}