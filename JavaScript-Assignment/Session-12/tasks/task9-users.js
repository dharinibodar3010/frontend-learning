function fetchUserEmails() {

    fetch(
        "https://jsonplaceholder.typicode.com/users"
    )

        .then(response => response.json())

        .then(users => {

            const emails =
                users.map(user => user.email);


            alert(
                emails.join(", ")
            );

        })

        .catch(error => {

            console.error(
                "Error:",
                error
            );

        });
}