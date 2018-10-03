// ---------- document ready ----------
document.addEventListener("DOMContentLoaded", () => {
    const Elmbreadcrumb = document.getElementById("siteBreadcrumb");














    // ---------- breadcrumbs ----------
    Elmbreadcrumb.innerHTML = `
        <a id="breadcrumbHome" href="/">
            Forside
        </a>
        <span id="breadcrumbSeperator">
            /
        </span>
        <a id="breadcrumbOther" href="/archive">
            Arkivet
        </a>
    `;

    // ---------- fetch most read 6 articles ----------
    fetch(`/articles/viewed/6`)
    .then(function(response) {
        return response.json();
    })
    .then(function(resultMostRead) {
        const mostViewedList = document.getElementById("asideMostList");
        resultMostRead.forEach(element => {
            mostViewedList.innerHTML += `
            <li class="asideMostItem">
                <a class="asideMostLink" href="/article/${element.id}">
                    ${element.title}
                </a>
            </li>
            `;
        });
    });

    // ---------- fetch random 5 sponsors ----------
    fetch(`/sponsors/random/5`)
    .then(function(response) {
        return response.json();
    })
    .then(function(resultSpo) {
        const sponsorList = document.getElementById("asideSponsorList"); 
        const folderName = ['car', 'boat', 'motorcycle'];
        resultSpo.forEach(element => {;
            sponsorList.innerHTML += `
                <li class="asideSponsorItem">
                    <a class="asideSponsorLink" href="/sponsors">
                        <img class="asideSponsorImg" src="/img/ads/${folderName[element.category_fk-1]}/${element.image}">
                    </a>
                </li>
            `;
        });
        sponsorList.innerHTML += `
            <li class="asideSponsorItem">
                <a id="asideYourSpoLink" href="">
                    Din reklame her?
                </a>
            </li>
        `;
    });
});