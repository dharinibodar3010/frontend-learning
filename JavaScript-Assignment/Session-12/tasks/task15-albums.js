function fetchAlbums() {

    fetch(
        "https://jsonplaceholder.typicode.com/albums"
    )

        .then(response => response.json())

        .then(albums => {

            const filteredAlbums =
                albums.filter(
                    album => album.userId === 2
                );


            filteredAlbums.forEach(album => {

                console.log(
                    album.title
                );

            });

        })

        .catch(error => {

            console.error(
                "Error:",
                error
            );

        });
} s