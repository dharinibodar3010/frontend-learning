import { links } from "./data.js";

import { saveLinks, loadLinks } from "./storage.js";

import { renderLinks } from "./links.js";


const linkForm = document.getElementById("linkForm");

const titleInput = document.getElementById("titleInput");

const urlInput = document.getElementById("urlInput");

const errorMessage = document.getElementById("errorMessage");

const linksContainer = document.getElementById("linksContainer");


// Load old links
const oldLinks = loadLinks();

links.push(...oldLinks);


// Display old links
renderLinks(links, linksContainer);


// Add Link
linkForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const title = titleInput.value.trim();

    const url = urlInput.value.trim();


    // Clear error
    errorMessage.textContent = "";


    // Title validation
    if (title === "") {

        errorMessage.textContent = "Please enter title.";

        return;
    }


    // URL validation
    if (!url.startsWith("https://")) {

        errorMessage.textContent =
            "URL must start with https://";

        return;
    }


    // Create object
    const newLink = {
        title: title,
        url: url
    };


    // Add object into array
    links.push(newLink);


    // Save
    saveLinks(links);


    // Display
    renderLinks(links, linksContainer);


    // Clear inputs
    titleInput.value = "";
    urlInput.value = "";

});


// Remove Link
linksContainer.addEventListener("click", function(event) {

    if (event.target.classList.contains("remove-btn")) {

        const index = Number(event.target.dataset.index);

        links.splice(index, 1);

        saveLinks(links);

        renderLinks(links, linksContainer);
    }

});