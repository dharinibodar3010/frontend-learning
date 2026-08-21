function fetchTopMovies() {

    fetch("https://jsonplaceholder.typicode.com/albums")

        .then(response => response.json())

        .then(albums => {

            const topMovies =
                albums.slice(0, 3);

            topMovies.forEach(movie => {

                console.log(
                    "Trending Movie:",
                    movie.title
                );

            });

        })

        .catch(error => {

            console.error(
                "Error fetching movies:",
                error
            );

        });
}