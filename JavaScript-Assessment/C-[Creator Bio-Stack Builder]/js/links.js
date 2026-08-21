export function renderLinks(
    links,
    container
) {

    container.innerHTML = "";


    links.forEach(function(link, index) {

        container.innerHTML += `

            <div class="link-item">

                <a
                    class="link-button"
                    href="${link.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ${link.title}
                </a>


                <button
                    class="delete-btn"
                    data-index="${index}"
                >
                    Delete
                </button>

            </div>

        `;

    });

}