export function saveLinks(links) {

    localStorage.setItem(
        "bioStackLinks",
        JSON.stringify(links)
    );

}


export function loadLinks() {

    const data =
        localStorage.getItem("bioStackLinks");


    if (data) {

        return JSON.parse(data);

    }


    return [];

}


export function saveTheme(theme) {

    localStorage.setItem(
        "bioStackTheme",
        theme
    );

}


export function loadTheme() {

    return localStorage.getItem(
        "bioStackTheme"
    ) || "light";

}