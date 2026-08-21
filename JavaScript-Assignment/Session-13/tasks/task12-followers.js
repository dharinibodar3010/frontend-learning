function formatFollowers(count) {

    try {

        if (count < 0) {

            throw new Error(
                "Negative count"
            );

        }

        return count + " followers";

    } catch (error) {

        return error.message;

    }
}


function testFollowers() {

    console.log(
        formatFollowers(-10)
    );

}