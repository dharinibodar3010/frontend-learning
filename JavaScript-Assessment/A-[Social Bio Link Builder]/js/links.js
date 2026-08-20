export function renderLinks(links, container) {

    container.innerHTML = "";

    links.forEach(function(link) {

        container.innerHTML += `
            
            <div class="link-item">

                <a 
                    href="${link.url}" 
                    target="_blank">

                    ${link.platform}

                </a>

                <button 
                    class="delete-btn"
                    data-id="${link.id}">

                    Delete

                </button>

            </div>

        `;
    });
}