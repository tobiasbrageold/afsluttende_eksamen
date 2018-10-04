// ---------- document ready ----------
document.addEventListener("DOMContentLoaded", () => {
    
    // ---------- fetch all editors ----------
    fetch(`/editors/all/`)
    .then(function(response) {
        return response.json();
    })
    .then(function(resultEditors) {
        const editorsCarList = document.getElementById("editorsCarList");
        const editorsBoatList = document.getElementById("editorsBoatList");
        const editorsBikeList = document.getElementById("editorsBikeList");
        // ---------- for each car editor----------
        resultEditors.forEach(element => {
            if(element.category_fk == 1) {
                editorsCarList.innerHTML += `
                    <li class="editorsCatItem">
                        <img class="editorsCatImg" src="/img/editors/${element.image}">
                        <h2 class="editrsCatTit">${element.f_name} ${element.l_name}</h2>
                        <span class="editorsCatMailCon">
                            <i class="fas fa-envelope"></i>
                            ${element.email}
                        </span>
                        <p class="editorsCatDesc">
                            ${element.about}
                        </p>
                    </li>
                `;
            }
            // ---------- for each boat editor----------
            if(element.category_fk == 2) {
                editorsBoatList.innerHTML += `
                    <li class="editorsCatItem">
                        <img class="editorsCatImg" src="/img/editors/${element.image}">
                        <h2 class="editrsCatTit">${element.f_name} ${element.l_name}</h2>
                        <span class="editorsCatMailCon">
                            <i class="fas fa-envelope"></i>
                            ${element.email}
                        </span>
                        <p class="editorsCatDesc">
                            ${element.about}
                        </p>
                    </li>
                `;
            }
            // ---------- for each bike editor----------
            if(element.category_fk == 3) {
                editorsBikeList.innerHTML += `
                    <li class="editorsCatItem">
                        <img class="editorsCatImg" src="/img/editors/${element.image}">
                        <h2 class="editrsCatTit">${element.f_name} ${element.l_name}</h2>
                        <span class="editorsCatMailCon">
                            <i class="fas fa-envelope"></i>
                            ${element.email}
                        </span>
                        <p class="editorsCatDesc">
                            ${element.about}
                        </p>
                    </li>
                `;
            }
        });
    });

    // ---------- breadcrumbs ----------
    const Elmbreadcrumb = document.getElementById("siteBreadcrumb");
    Elmbreadcrumb.innerHTML = `
        <a id="breadcrumbHome" href="/">
            Forside
        </a>
        <span id="breadcrumbSeperator">
            /
        </span>
        <a id="breadcrumbOther" href="/editors">
            Redaktionen
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
                    <img class="asideSponsorImg" src="/img/ads/${folderName[element.category_fk-1]}/${element.image}">
                </li>
            `;
        });
        sponsorList.innerHTML += `
            <li class="asideSponsorItem">
                <a id="asideYourSpoLink" href="/sponsors">
                    Din reklame her?
                </a>
            </li>
        `;
    });
});