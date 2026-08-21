function createPost() {

    const newPost = {

        title: "My New Post",

        body: "This is my post body."

    };


    fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {

            method: "POST",

            headers: {

                "Content-Type":
                    "application/json"

            },

            body: JSON.stringify(newPost)

        }
    )

    .then(response => response.json())

    .then(data => {

        console.log(
            "Response object:",
            data
        );


        if (data.id) {

            console.log(
                "ID is present:",
                data.id
            );

        } else {

            console.log(
                "ID is not present."
            );

        }

    })

    .catch(error => {

        console.error(
            "Error:",
            error
        );

    });
}