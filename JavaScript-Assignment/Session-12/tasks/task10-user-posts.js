function fetchUserWithPosts() {

    fetch(
        "https://jsonplaceholder.typicode.com/users/2"
    )

        .then(response => response.json())

        .then(user => {

            return fetch(
                `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
            )

                .then(response => response.json())

                .then(posts => {

                    console.log(
                        "User Name:",
                        user.name
                    );


                    console.log(
                        "Post Titles:"
                    );


                    posts.forEach(post => {

                        console.log(
                            post.title
                        );

                    });

                });

        })

        .catch(error => {

            console.error(
                "Error:",
                error
            );

        });
}