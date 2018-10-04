// ---------- document ready ----------
document.addEventListener("DOMContentLoaded", () => {
    
    // ---------- fetch ----------
    fetch(`/sponsor/about/`)
    .then(function(response) {
        return response.json();
    })
    .then(function(resultSponsor) {
        const sponsPriceList = document.getElementById("sponsPriceList");
        const sponsorDesc = document.getElementById("sponsorDesc");
        sponsorDesc.innerHTML = resultSponsor[0].sponsor_about;
        sponsPriceList.innerHTML = `
            <li class="sponPriceItem">
                1.000
            </li>
            <li class="sponPriceItem">
                ${resultSponsor[0].price_1} kr.
            </li>
            <li class="sponPriceItem">
                2.000
            </li>
            <li class="sponPriceItem">
                ${resultSponsor[0].price_2} kr.
            </li>
            <li class="sponPriceItem">
                5.000
            </li>
            <li class="sponPriceItem">
                ${resultSponsor[0].price_3} kr.
            </li>
            <li class="sponPriceItem">
                10.000
            </li>
            <li class="sponPriceItem">
                ${resultSponsor[0].price_4} kr.
            </li>
            <li class="sponPriceItem">
                25.000
            </li>
            <li class="sponPriceItem">
                ${resultSponsor[0].price_5} kr.
            </li>
            <li class="sponPriceItem">
                50.000
            </li>
            <li class="sponPriceItem">
                ${resultSponsor[0].price_6} kr.
            </li>
        `;
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
        <a id="breadcrumbOther" href="/sponsors">
            Sponsor
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