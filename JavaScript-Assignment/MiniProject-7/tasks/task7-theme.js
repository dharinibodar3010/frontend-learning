function toggleTheme() {

    document.body.classList.toggle(
        "dark-mode"
    );


    const isDark =
        document.body.classList.contains(
            "dark-mode"
        );


    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );
}


// Apply saved theme when page loads

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark-mode"
    );
}