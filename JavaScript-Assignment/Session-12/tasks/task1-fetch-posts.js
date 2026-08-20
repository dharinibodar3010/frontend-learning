function fetchPosts() {

    fetch("https://jsonplaceholder.typicode.com/posts")

        .then(response => response.json())

        .then(posts => {

            const firstFive =
                posts.slice(0, 5);

            firstFive.forEach(post => {

                console.log(post.title);

            });

        })

        .catch(error => {

            console.error(
                "Error fetching posts:",
                error
            );

        });
}