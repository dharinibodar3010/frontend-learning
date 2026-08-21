function validateInstagram() {

    const input =
        document.getElementById(
            "instagramInput"
        );

    const error =
        document.getElementById(
            "instagramError"
        );


    const url =
        input.value.trim();


    if (
        url === "" ||
        !url.startsWith(
            "https://instagram.com/"
        )
    ) {

        error.textContent =
            "Please enter a valid Instagram profile URL.";

        error.className =
            "error";

        return;
    }


    error.textContent =
        "Valid Instagram URL.";

    error.className =
        "success";
}