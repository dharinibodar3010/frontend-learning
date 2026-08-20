function validateURL(url) {

    return (
        url.startsWith("https://") &&
        url.includes(".")
    );
}


function checkURL() {

    const url =
        document.getElementById(
            "urlInput"
        ).value.trim();


    const message =
        document.getElementById(
            "urlMessage"
        );


    if (validateURL(url)) {

        message.textContent =
            "Valid URL";

        message.className =
            "success";

    } else {

        message.textContent =
            "Invalid URL. URL must start with https:// and contain a dot.";

        message.className =
            "error";
    }
}