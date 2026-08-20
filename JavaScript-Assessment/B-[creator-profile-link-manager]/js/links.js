export function renderLinks(links, container) {

    container.innerHTML = "";

    links.forEach(function(link, index) {

        container.innerHTML += `
            <div class="profile-link">

                <a href="${link.url}" target="_blank">
                    ${link.title}
                </a>

                <button class="remove-btn" data-index="${index}">
                    Remove
                </button>

            </div>
        `;
    });
}