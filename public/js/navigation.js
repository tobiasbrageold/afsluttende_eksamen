// ---------- document ready ----------
document.addEventListener("DOMContentLoaded", () => {
    // ---------- fetch entire navigation ----------
    fetch(`/navigation/all`)
    .then(function(response) {
        return response.json();
    })
    .then(function(resultNav) {
        const indexNav = document.getElementById("siteNav"); 
        let windowLocPath = window.location.pathname;
        console.log();
        resultNav.forEach(element => {
            if(element.url == windowLocPath) {
                indexNav.innerHTML += `
                    <li class="siteNavItem">
                        <a class="siteNavLink siteNavLinkActive" href="${element.url}">
                            ${element.icon}
                            ${element.name}
                        </a>
                    </li>
                `;
            } else {
                indexNav.innerHTML += `
                    <li class="siteNavItem">
                        <a class="siteNavLink" href="${element.url}">
                            ${element.icon}
                            ${element.name}
                        </a>
                    </li>
                `;
            }
        });
    });
});