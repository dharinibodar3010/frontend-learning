function createStackTrace() {

    try {

        JSON.parse(
            '{"name":"Shoes"'
        );

    } catch (error) {

        console.error(
            "Error occurred:",
            error
        );

    }

}