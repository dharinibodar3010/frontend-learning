import {
    saveTheme,
    loadTheme
} from "./storage.js";


export function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark");

    } else {

        document.body.classList.remove("dark");

    }

}


export function setupTheme(button) {

    let theme = loadTheme();


    applyTheme(theme);


    updateButton(button, theme);


    button.addEventListener(
        "click",
        function() {

            if (theme === "light") {

                theme = "dark";

            } else {

                theme = "light";

            }


            applyTheme(theme);

            saveTheme(theme);

            updateButton(button, theme);

        }
    );

}


function updateButton(button, theme) {

    if (theme === "dark") {

        button.textContent =
            "☀️ Light Mode";

    } else {

        button.textContent =
            "🌙 Dark Mode";

    }

}