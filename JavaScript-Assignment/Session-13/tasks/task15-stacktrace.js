function validateAge(age) {

    if (age < 18) {

        throw new Error(
            "Age must be 18 or above"
        );

    }

    return "Age is valid";
}


function testStackTrace() {

    try {

        validateAge(15);

    } catch (error) {

        console.error(error);

    }

}

// The error occurs because the age is below 18.
// The stack trace shows that validateAge() caused the error.