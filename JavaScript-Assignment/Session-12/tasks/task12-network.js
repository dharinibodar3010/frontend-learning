function fetchUsersForNetwork() {

    fetch(
        "https://jsonplaceholder.typicode.com/users"
    )

        .then(response => {

            console.log(
                "Response Status:",
                response.status
            );

            console.log(
                "Response OK:",
                response.ok
            );

            return response.json();

        })

        .then(users => {

            console.log(
                "Users:",
                users
            );

        })

        .catch(error => {

            console.error(
                "Network Error:",
                error
            );

        });
}