import {
    creator,
    defaultLinks
} from "./data.js";


import {
    saveLinks,
    loadLinks
} from "./storage.js";


import {
    renderLinks
} from "./links.js";


// -----------------------------
// DOM Selection
// -----------------------------

const creatorName =
    document.getElementById("creatorName");

const bio =
    document.getElementById("bio");

const followers =
    document.getElementById("followers");

const verifiedBadge =
    document.getElementById("verifiedBadge");

const linksContainer =
    document.getElementById("linksContainer");

const platformInput =
    document.getElementById("platformInput");

const urlInput =
    document.getElementById("urlInput");

const addBtn =
    document.getElementById("addBtn");


// -----------------------------
// Display Creator Information
// -----------------------------

creatorName.textContent = creator.name;

bio.textContent = creator.bio;

followers.textContent =
    `${creator.followers} Followers`;


// -----------------------------
// Verified Creator
// -----------------------------

function updateVerifiedBadge() {

    if (creator.followers >= 10000) {

        verifiedBadge.textContent =
            "✓ Verified Creator";

    } else {

        verifiedBadge.textContent = "";

    }
}

updateVerifiedBadge();


// -----------------------------
// Load Social Links
// -----------------------------

let links = loadLinks();


// If LocalStorage is empty
// use default links

if (links.length === 0) {

    links = defaultLinks;

    saveLinks(links);
}


// -----------------------------
// Render Links
// -----------------------------

function updateUI() {

    renderLinks(
        links,
        linksContainer
    );

    saveLinks(links);
}

updateUI();


// -----------------------------
// Add New Social Link
// -----------------------------

addBtn.addEventListener(
    "click",
    function() {

        const platform =
            platformInput.value.trim();

        const url =
            urlInput.value.trim();


        if (platform === "" || url === "") {

            alert("Please enter platform and URL.");

            return;
        }


        const newLink = {

            id: Date.now(),

            platform: platform,

            url: url

        };


        links.push(newLink);


        saveLinks(links);

        renderLinks(
            links,
            linksContainer
        );


        platformInput.value = "";

        urlInput.value = "";
    }
);


// -----------------------------
// Event Delegation
// -----------------------------

linksContainer.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "delete-btn"
            )
        ) {

            const id =
                Number(
                    event.target.dataset.id
                );


            links = links.filter(
                function(link) {

                    return link.id !== id;

                }
            );


            saveLinks(links);


            renderLinks(
                links,
                linksContainer
            );
        }
    }
);