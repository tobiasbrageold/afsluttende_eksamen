// ---------- document ready ----------
document.addEventListener("DOMContentLoaded", () => {
    const commentSubmit = document.getElementById("commentSubmit");
    const Elmbreadcrumb = document.getElementById("siteBreadcrumb");
    const ElmdocTitle = document.getElementById("siteMainTitle"); 
    let windowLocPath = window.location.pathname;
    let articleId = windowLocPath.replace('/article/','');
    const categoryName = ["Biler", "Både", "Bike's"];
    const categoryUrlName = ["cars", "boats", "bikes"];
    const monthName = ['JANUAR', 'FEBRUAR', 'MARTS', 'APRIL', 'MAJ', 'JUNI', 'JULI', 'AUGUST', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DECEMBER'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // ---------- fetch article ----------
    fetch(`/article/data/${articleId}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(resultArt) {
        let categoryId = resultArt[0].category_id;
        let articleTitle = resultArt[0].title;
        let articleDataText = resultArt[0].article;
        let articleDataViews = resultArt[0].views;
        let articleDataTime = new Date(resultArt[0].time*1000);
        let articleDataEditor = resultArt[0].editor_fk;

        // ---------- fetch entire navigation ----------
        fetch(`/navigation/all`)
        .then(function(response) {
            return response.json();
        })
        .then(function(resultNav) {
            const indexNav = document.getElementById("siteNav"); 
            resultNav.forEach(element => {
                if(element.url == `/${resultArt[0].category_name}`) {
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

            // ---------- fetch most read 6 articles by category ----------
            fetch(`/articles/viewed/${categoryId}/6`)
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
            fetch(`/sponsors/${categoryId}/5`)
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

        // ---------- content title ----------
        ElmdocTitle.innerHTML = articleTitle.toUpperCase();

        // ---------- breadcrumbs ----------
        Elmbreadcrumb.innerHTML = `
            <a id="breadcrumbHome" href="/">
                Forside
            </a>
            <span id="breadcrumbSeperator">
                /
            </span>
            <a id="breadcrumbOther" href="/${categoryUrlName[categoryId-1]}">
                ${categoryName[categoryId-1]}
            </a>
            <span id="breadcrumbSeperator">
                /
            </span>
            <a id="breadcrumbArticle" href="/article/${articleId}">
                Vis artikel
            </a>
        `;

        // ---------- fetch comments count ----------
        fetch(`/comments/count/${articleId}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(resultCatCom) {
            const articleViews = document.getElementById("articleViews");
            const articleComments = document.getElementById("articleComments");
            const articleDate = document.getElementById("articleDate");
            const articleText = document.getElementById("articleText");
            let articleComCount = resultCatCom[0].comments;

            // ---------- render date, comments and views ----------
            articleDate.innerHTML = `<i class="far fa-clock indexArticleIcon"></i>${articleDataTime.getDate()}. ${monthName[articleDataTime.getMonth()]} KL. ${twoDigit(articleDataTime.getHours())}:${twoDigit(articleDataTime.getMinutes())}`;
            articleComments.innerHTML = `<i class="fas fa-comments indexArticleIcon"></i>${articleComCount} KOMMENTARER`;
            articleViews.innerHTML = `<i class="far fa-eye indexArticleIcon"></i>${articleDataViews} VISNINGER`;
            articleText.innerHTML = articleDataText;

            // ---------- fetch editor ----------
            fetch(`/editor/${articleDataEditor}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(resultEditor) {
                const articleEditorCon = document.getElementById("articleEditorCon");
                articleEditorCon.innerHTML = `
                    <img id="artEditorImg" src="/img/editors/${resultEditor[0].image}">
                    <span id="artEditorHead">
                        <h2 id="artEditorTitle">
                            af ${resultEditor[0].f_name} ${resultEditor[0].l_name}
                        </h2>
                        <span id="artEditorRole">
                            Redaktør
                        </span>
                    </span>
                    <p id="artEditorAbout">
                        ${resultEditor[0].about}
                    </p>
                `;
                // ---------- get and show comments ----------
                getComments();
            });
        });
    });
    // ---------- comment add ----------
    commentSubmit.addEventListener('click', (event) => {
        let elmCommName = document.getElementById("commentName");
        let elmCommMail = document.getElementById("commentMail");
        let elmCommMess = document.getElementById("commentMessage");
        if(elmCommName.value.length < 2) {
            alert('Dit navn er for kort.');
        } else {
            if(elmCommMail.value.length < 2 || isEmail(elmCommMail.value) == false) {
                alert('Din e-mailadresse er ugyldig.');
            } else {
                if(elmCommMess.value.length < 2) {
                    alert('Din kommentar er for kort');
                } else {
                    // add comment
                    let init = {
                        method: 'POST',
                        headers: headers,
                        body: `{"name":"${elmCommName.value}", "email":"${elmCommMail.value}", "comment":"${elmCommMess.value}", "time":"${Math.round((new Date()).getTime() / 1000)}", "articleId":"${articleId}"}`,
                        cache: 'no-cache',
                        mode: 'cors'
                    };
                    let request = new Request('/comment/add', init);
                    fetch(request)
                    .then(response => {
                        return response.json();
                    })
                    .then((result) => { 
                        if(result.affectedRows == 1) {
                            // ---------- clear fields ----------
                            elmCommName.value = '';
                            elmCommMail.value = '';
                            elmCommMess.value = '';
                            getComments();
                        }
                    });
                }
            }
        }
    });

    // ---------- get and show comments ----------
    function getComments() {
        // ---------- clear comments ----------
        artCommList.innerHTML = '';
        // ---------- fetch comments ----------
        fetch(`/comments/${articleId}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(resultComments) {
            const artCommList = document.getElementById("artCommList");
            if(!resultComments.message) {
                resultComments.forEach(element => {
                    let commDate = new Date(element.time*1000);
                    artCommList.innerHTML += `
                        <li class="artCommItem">
                            <div class="artCommIconCon">
                                <i class="fas fa-comment artCommIcon"></i>
                            </div>
                            <div class="artCommCon">
                                <h2 class="artCommName">
                                    ${element.name}
                                </h2>
                                <span class="artCommDateCon">
                                    <i class="far fa-clock indexArticleIcon"></i>${commDate.getDate()}. ${monthName[commDate.getMonth()]} ${commDate.getFullYear()} KL. ${twoDigit(commDate.getHours())}:${twoDigit(commDate.getMinutes())}:${twoDigit(commDate.getSeconds())}
                                </span>
                                <p class="artCommText">
                                    ${element.comment}
                                </p>
                            </div>
                        </li>
                    `;
                });
            } else {
                artCommList.innerHTML += `
                    <li id="artCommNone">
                        Der er ingen kommentarer at vise, vær den første til at kommentere.
                    </li>
                `;
            }
        });
    }
});

// ---------- convert one digit to two digits ----------
function twoDigit(value) {
    value = value.toString();
    if(value.length == 1)
        return '0'+value;
    else
        return value;
}

// ---------- is email----------
function isEmail(email) {
    let expression = /\S+@\S+\.\S+/;
    return expression.test(email);
}