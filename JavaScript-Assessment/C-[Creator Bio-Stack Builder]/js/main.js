import { links } from "./data.js";


import {
    saveLinks,
    loadLinks
} from "./storage.js";


import {
    renderLinks
} from "./links.js";


import {
    setupTheme
} from "./theme.js";


// --------------------------------
// DOM Selection
// --------------------------------

const linkForm =
    document.getElementById("linkForm");


const titleInput =
    document.getElementById("titleInput");


const urlInput =
    document.getElementById("urlInput");


const errorMessage =
    document.getElementById("errorMessage");


const linksContainer =
    document.getElementById("linksContainer");


const themeBtn =
    document.getElementById("themeBtn");


// --------------------------------
// Load Saved Links
// --------------------------------

const savedLinks = loadLinks();

links.push(...savedLinks);


// --------------------------------
// Initial Rendering
// --------------------------------

renderLinks(
    links,
    linksContainer
);


// --------------------------------
// Theme Engine
// --------------------------------

setupTheme(themeBtn);


// --------------------------------
// Add Link
// --------------------------------

linkForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        errorMessage.textContent = "";


        const title =
            titleInput.value.trim();


        const url =
            urlInput.value.trim();


        // Empty field validation

        if (
            title === "" ||
            url === ""
        ) {

            errorMessage.textContent =
                "Please fill in all fields.";

            return;

        }


        // URL validation

        try {

            const validUrl =
                new URL(url);


            if (
                validUrl.protocol !== "https:"
            ) {

                errorMessage.textContent =
                    "URL must start with https://";

                return;

            }

        } catch (error) {

            errorMessage.textContent =
                "Please enter a valid URL.";

            return;

        }


        // Create object

        const newLink = {

            title: title,

            url: url

        };


        // Add to array

        links.push(newLink);


        // Save

        saveLinks(links);


        // Render

        renderLinks(
            links,
            linksContainer
        );


        // Clear inputs

        titleInput.value = "";

        urlInput.value = "";

    }
);


// --------------------------------
// Delete Link
// --------------------------------

linksContainer.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "delete-btn"
            )
        ) {

            const index =
                Number(
                    event.target.dataset.index
                );


            links.splice(index, 1);


            saveLinks(links);


            renderLinks(
                links,
                linksContainer
            );

        }

    }
);