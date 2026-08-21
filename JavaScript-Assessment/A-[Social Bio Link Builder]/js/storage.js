export function saveLinks(links) {

    localStorage.setItem(
        "socialLinks",
        JSON.stringify(links)
    );
}


export function loadLinks() {

    const savedLinks =
        localStorage.getItem("socialLinks");

    if (savedLinks) {

        return JSON.parse(savedLinks);

    }

    return [];
}