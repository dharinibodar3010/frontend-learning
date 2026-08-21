function validateUsername(username) {

    const pattern = /^[A-Za-z0-9]+$/;


    if (!pattern.test(username)) {

        throw new Error("Invalid Username");

    }

    return true;
}


function testUsername() {

    try {

        validateUsername("Dharini123");

        console.log("Valid Username");

    } catch (error) {

        console.error(error.message);

    }
}