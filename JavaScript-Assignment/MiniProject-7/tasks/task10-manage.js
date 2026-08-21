function manageLink(
    linkObj,
    mode
) {

    let playlists =
        JSON.parse(
            localStorage.getItem("myPlaylists")
        ) || [];


    if (mode === "add") {

        playlists.push(linkObj);

    } else if (mode === "edit") {

        if (
            linkObj.index < 0 ||
            linkObj.index >= playlists.length
        ) {

            console.log(
                "Invalid index."
            );

            return;
        }


        playlists[linkObj.index] = {
            name: linkObj.name,
            url: linkObj.url
        };

    } else {

        console.log(
            "Mode must be add or edit."
        );

        return;
    }


    // Common LocalStorage update

    localStorage.setItem(
        "myPlaylists",
        JSON.stringify(playlists)
    );


    console.log(
        "Link managed successfully."
    );
}


// Test Add

function testManageAdd() {

    manageLink(
        {
            name: "Spotify",
            url: "https://spotify.com"
        },
        "add"
    );

    alert("Link added.");
}


// Test Edit

function testManageEdit() {

    manageLink(
        {
            index: 0,
            name: "Updated Spotify",
            url: "https://spotify.com/updated"
        },
        "edit"
    );

    alert("Link edited.");
}