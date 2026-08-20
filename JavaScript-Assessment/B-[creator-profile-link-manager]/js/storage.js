export function saveLinks(links) {
    localStorage.setItem("creatorLinks", JSON.stringify(links));
}

export function loadLinks() {
    const data = localStorage.getItem("creatorLinks");

    if (data) {
        return JSON.parse(data);
    }

    return [];
}