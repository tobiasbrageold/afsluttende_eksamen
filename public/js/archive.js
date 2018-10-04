// ---------- document ready ----------
document.addEventListener("DOMContentLoaded", () => {
    const Elmbreadcrumb = document.getElementById("siteBreadcrumb");
    const elmPagCon = document.getElementById("archivePagCon");
    const ElmCatList = document.getElementById("siteCatList");
    const monthName = ['JANUAR', 'FEBRUAR', 'MARTS', 'APRIL', 'MAJ', 'JUNI', 'JULI', 'AUGUST', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DECEMBER'];
    const catName = ["BIL", "BÅD", "BIKE"];
    let windowUrl = new URL(window.location.href);
    let httpSrc = windowUrl.searchParams.get("q");
    let httpPage = windowUrl.searchParams.get("page");
    let currPage = httpPage;

    if(httpSrc !== null) {
        document.getElementById("archiveSrcQuery").style.display = "block";
        document.getElementById("asideSrcField").value = httpSrc;
        const archiveSrcQuery = document.getElementById("archiveSrcQuery");
        if(httpSrc.length <= 2) {
            archiveSrcQuery.innerHTML = `
                <p class="archiveSrcDes">Din søgning er for kort, prøv at udvid din søgning.</p>
            `;

        } else {
            // ---------- search articles count ----------
            fetch(`/search/count/${httpSrc}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(resultSrcCount) {
                let artLimit = 5;
                let srcOff = 0;
                let articleCountTot = resultSrcCount[0].articleCount;
                let totalPages = Math.ceil(articleCountTot/artLimit);
                if(currPage === null) {
                    currPage = 1;
                    window.history.replaceState({}, document.title, '/archive?q='+httpSrc+'&page='+currPage);
                } else if(currPage > totalPages) {
                    currPage = totalPages;
                    window.history.replaceState({}, document.title, '/archive?q='+httpSrc+'&page='+currPage);
                } else if(currPage == 0) {
                    currPage = 1;
                    window.history.replaceState({}, document.title, '/archive?q='+httpSrc+'&page='+currPage);
                } else {
                    currPage = Number(httpPage);
                }
                if(currPage == 1) {
                    srcOff = 0;
                } else {
                    srcOff = currPage * artLimit - 5;
                }
                // ---------- search all articles bu query ----------
                fetch(`/search/all/${httpSrc}/${srcOff}/${artLimit}`)
                .then(function(response) {
                    return response.json();
                })
                .then(function(resultSrc) {
                    archiveSrcQuery.innerHTML = `
                        <p class="archiveSrcDes">Din søgning på</p>
                        <p class="archiveSrcTxt">${httpSrc}</p>
                        <p class="archiveSrcDes">returnerede</p>
                        <p class="archiveSrcTxt">${articleCountTot}</p>
                        <p class="archiveSrcDes">artikler</p>
                    `;
                    // ---------- for each article by search ----------
                    resultSrc.forEach(element => {
                        // ---------- fetch comments ----------
                        fetch(`/comments/count/${element.id}`)
                        .then(function(response) {
                            return response.json();
                        })
                        .then(function(resultComm) {
                            let commCount = resultComm[0].comments;
                            console.log(commCount);
                            let elmDate = new Date(element.time*1000);
                            let elmDesc = element.article;
                            let finalDesc = '';
                            if(elmDesc.length >= 200) {
                                finalDesc = elmDesc.slice(0, 200);
                                finalDesc += ' ...';
                            } else {
                                finalDesc = elmDesc;
                            }
                            ElmCatList.innerHTML += `
                                <li class="siteCatItem">
                                    <h2 class="siteCatTitle">
                                        ${element.title}
                                    </h2>
                                    <span class="siteCatInfoSpan">
                                        <span class="indexArticleAbout"><i class="far fa-clock indexArticleIcon"></i>${elmDate.getDate()}. ${monthName[elmDate.getMonth()]} KL. ${elmDate.getHours()}:${elmDate.getMinutes()}</span>
                                        <span class="indexArticleAbout"><i class="fas fa-comments indexArticleIcon"></i>${commCount} KOMMENTARER</span>
                                        <span class="indexArticleAbout"><i class="far fa-eye indexArticleIcon"></i>${element.views} VISNINGER</span>
                                    </span>
                                    <p class="siteCatDescription">
                                        ${finalDesc}
                                    </p>
                                    <span class="siteCatTagSpan">
                                        <span class="indexArticleTag"><i class="fas fa-tag indexArticleIcon"></i>${catName[element.category_id-1]}</span>
                                    </span>
                                    <a class="siteCatMore" href="/article/${element.id}">
                                        LÆS MERE
                                    </a>
                                </li>
                            `;
                        });

                    });
                    // ---------- paging ----------
                    if(totalPages > 1) {
                        for (let pagingI = 0; pagingI < totalPages; pagingI++) {
                            if(pagingI+1 == currPage) {
                                elmPagCon.innerHTML += `
                                    <li class="archivePagItem">
                                        <a class="archivePagLink archivePagLinkActive" href="/archive?q=${httpSrc}&page=${pagingI+1}">
                                            ${pagingI+1}
                                        </a>
                                    </li>
                                `;
                            } else {
                                elmPagCon.innerHTML += `
                                    <li class="archivePagItem">
                                        <a class="archivePagLink" href="/archive?q=${httpSrc}&page=${pagingI+1}">
                                            ${pagingI+1}
                                        </a>
                                    </li>
                                `;
                            }
                        }
                    }
                    // ---------- show articles below DEFAULT ----------
                });
            });
        }
    } else {
        // ---------- fetch all articles count ----------
        fetch(`/article/all/count`)
        .then(function(response) {
            return response.json();
        })
        .then(function(resultArCount) {
            let artLimit = 5;
            let allArticleCount = resultArCount[0].articleCount;
            let totalPages = Math.ceil(allArticleCount/artLimit);
            let artOffset = 0;
            if(currPage === null) {
                currPage = 1;
                window.history.replaceState({}, document.title, '/archive?page='+currPage);
            } else if(currPage > totalPages) {
                currPage = totalPages;
                window.history.replaceState({}, document.title, '/archive?page='+currPage);
            } else if(currPage == 0) {
                currPage = 1;
                window.history.replaceState({}, document.title, '/archive?page='+currPage);
            } else {
                currPage = Number(httpPage);
            }
            if(currPage == 1) {
                artOffset = 0;
            } else {
                artOffset = currPage * artLimit - 5;
            }
            // ---------- fetch articles with offset and limit ----------
            fetch(`/article/offset/${artOffset}/${artLimit}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(resultArt) {
                // ---------- for each article ----------
                resultArt.forEach(element => {
                    // ---------- fetch comments ----------
                    fetch(`/comments/count/${element.id}`)
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(resultComm) {
                        let commCount = resultComm[0].comments;
                        let elmDate = new Date(element.time*1000);
                        let elmDesc = element.article;
                        let finalDesc = '';
                        if(elmDesc.length >= 200) {
                            finalDesc = elmDesc.slice(0, 200);
                            finalDesc += ' ...';
                        } else {
                            finalDesc = elmDesc;
                        }
                        ElmCatList.innerHTML += `
                            <li class="siteCatItem">
                                <h2 class="siteCatTitle">
                                    ${element.title}
                                </h2>
                                <span class="siteCatInfoSpan">
                                    <span class="indexArticleAbout"><i class="far fa-clock indexArticleIcon"></i>${elmDate.getDate()}. ${monthName[elmDate.getMonth()]} KL. ${elmDate.getHours()}:${elmDate.getMinutes()}</span>
                                    <span class="indexArticleAbout"><i class="fas fa-comments indexArticleIcon"></i>${commCount} KOMMENTARER</span>
                                    <span class="indexArticleAbout"><i class="far fa-eye indexArticleIcon"></i>${element.views} VISNINGER</span>
                                </span>
                                <p class="siteCatDescription">
                                    ${finalDesc}
                                </p>
                                <span class="siteCatTagSpan">
                                    <span class="indexArticleTag"><i class="fas fa-tag indexArticleIcon"></i>${catName[element.category_id-1]}</span>
                                </span>
                                <a class="siteCatMore" href="/article/${element.id}">
                                    LÆS MERE
                                </a>
                            </li>
                        `;
                    });
                });
                // ---------- paging ----------
                for (let pagingI = 0; pagingI < totalPages; pagingI++) {
                    if(pagingI+1 == currPage) {
                        elmPagCon.innerHTML += `
                            <li class="archivePagItem">
                                <a class="archivePagLink archivePagLinkActive" href="/archive?page=${pagingI+1}">
                                    ${pagingI+1}
                                </a>
                            </li>
                        `;
                    } else {
                        elmPagCon.innerHTML += `
                            <li class="archivePagItem">
                                <a class="archivePagLink" href="/archive?page=${pagingI+1}">
                                    ${pagingI+1}
                                </a>
                            </li>
                        `;
                    }
                }
            });
        });
    }

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
            if(element.url == '/archive') {
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