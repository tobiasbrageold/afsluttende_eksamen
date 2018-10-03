// ---------- document ready ----------
document.addEventListener("DOMContentLoaded", () => {
    const ElmCatList = document.getElementById("siteCatList");
    const Elmbreadcrumb = document.getElementById("siteBreadcrumb");
    const ElmdocTitle = document.getElementById("siteMainTitle"); 
    // cars = category:1 & boats = category:2 & bikes = category:3
    const pageName = {"cars":"BILER", "boats":"BÅDE", "bikes":"BIKE'S"};
    const pageNameNor = ["Biler", "Både", "Bike's"];
    let windowLocPath = window.location.pathname;
    let pathRealNameLow = windowLocPath.replace('/','');
    let pathRealNameCas = pageName[pathRealNameLow];
    let pathCategoryId = Object.keys(pageName).indexOf(pathRealNameLow)+1;

    // ---------- document title ----------
    document.title = 'Magasinet - ' + pageNameNor[pathCategoryId-1];

    // ---------- breadcrumbs ----------
    Elmbreadcrumb.innerHTML = `
        <a id="breadcrumbHome" href="/">
            Forside
        </a>
        <span id="breadcrumbSeperator">
            /
        </span>
        <a id="breadcrumbOther" href="/${pathRealNameLow}">
            ${pageNameNor[pathCategoryId-1]}
        </a>
    `;

    // ---------- content title ----------
    ElmdocTitle.innerHTML = pathRealNameCas;

    // ---------- fetch newest 3 articles from a category ----------
    fetch(`/articles/newest/${pathCategoryId}/3`)
    .then(function(response) {
        return response.json();
    })
    .then(function(resultCat) {
        const monthName = ['JANUAR', 'FEBRUAR', 'MARTS', 'APRIL', 'MAJ', 'JUNI', 'JULI', 'AUGUST', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DECEMBER'];
        resultCat.forEach(element => {
            // ---------- fetch comments ----------
            fetch(`/comments/count/${element.id}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(resultCatCom) {
                let articleCommCount = resultCatCom[0].comments;
                let articleDate = new Date(element.time*1000);
                let articleDesc = element.article;
                let finalDesc = '';

                if(articleDesc.length >= 500) {
                    finalDesc = articleDesc.slice(0, 500);
                    finalDesc += ' ...';
                } else {
                    finalDesc = articleDesc;
                }
                ElmCatList.innerHTML += `
                    <li class="siteCatItem">
                        <h2 class="siteCatTitle">
                            ${element.title}
                        </h2>
                        <span class="siteCatInfoSpan">
                            <span class="indexArticleAbout"><i class="far fa-clock indexArticleIcon"></i>${articleDate.getDate()}. ${monthName[articleDate.getMonth()]} KL. ${twoDigit(articleDate.getHours())}:${twoDigit(articleDate.getMinutes())}</span>
                            <span class="indexArticleAbout"><i class="fas fa-comments indexArticleIcon"></i>${articleCommCount} KOMMENTARER</span>
                            <span class="indexArticleAbout"><i class="far fa-eye indexArticleIcon"></i>${element.views} VISNINGER</span>
                        </span>
                        <p class="siteCatDescription">
                            ${finalDesc}
                        </p>
                        <a class="siteCatMore" href="/article/${element.id}">
                            LÆS MERE
                        </a>
                    </li>
                `;
            });
        });
    });

    // ---------- fetch most read 6 articles by category ----------
    fetch(`/articles/viewed/${pathCategoryId}/6`)
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

    // ---------- fetch 5 sponsors by category ----------
    fetch(`/sponsors/${pathCategoryId}/5`)
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

// ---------- convert one digit to two digits ----------
function twoDigit(value) {
    value = value.toString();
    if(value.length == 1)
        return '0'+value;
    else
        return value;
}