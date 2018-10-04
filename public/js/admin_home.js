// ---------- comment add ----------
document.addEventListener("DOMContentLoaded", () => {
    let roleNotAllow = 0;
    const editArtCon = document.getElementById("editArtCon");  
    const monthName = ['JANUAR', 'FEBRUAR', 'MARTS', 'APRIL', 'MAJ', 'JUNI', 'JULI', 'AUGUST', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DECEMBER'];
    if(readCookie('usertoken') || readCookie('userid')) {
        // ---------- fetch confirm user token ----------
        fetch(`/confirm/token/${readCookie('usertoken')}/${readCookie('userid')}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(resultConToken) {
            if(resultConToken[0].token == 1) {
                // ---------- user signed in ----------
                // ---------- update cookies ----------
                createCookie('usertoken', readCookie('usertoken'), 30);
                createCookie('userid', readCookie('userid'), 30);
                let userId = readCookie('userid');
                // ---------- fetch user data ----------
                fetch(`/user/data/${userId}`)
                .then(function(response) {
                    return response.json();
                })
                .then(function(resultUser) {
                    let catName = ["Biler", "Både", "Bike's"];
                    let catNameShort = ["Bil", "Båd", "Bike"];
                    let username = resultUser[0].username;
                    let userFName = resultUser[0].f_name;
                    let userLNname = resultUser[0].l_name;
                    let userImage = resultUser[0].image;
                    let userAbout = resultUser[0].about;
                    let userMail = resultUser[0].email;
                    let userRole = resultUser[0].role_fk;
                    let userCategory = resultUser[0].category_fk;
                    if(roleNotAllow == Number(userRole)) {
                        window.location = '/admin';
                    } else {

                        const adminArticleList = document.getElementById("adminArticleList");   
                        if(userRole == 1) {
                            // ---------- admin show all articles ----------
                            fetch(`/articles/all`)
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(resultAllArt) {
                                resultAllArt.forEach(element => {
                                    let elmDate = new Date(element.time*1000);
                                    let elmDesc = element.article;
                                    let finalDesc = '';
                                    if(elmDesc.length >= 200) {
                                        finalDesc = elmDesc.slice(0, 200);
                                        finalDesc += ' ...';
                                    } else {
                                        finalDesc = elmDesc;
                                    }
                                    fetch(`/editor/${element.editor_fk}`)
                                    .then(function(response) {
                                        return response.json();
                                    })
                                    .then(function(resultEditor) {
                                        adminArticleList.innerHTML += `
                                            <li class="adminArtItem">
                                                <h2 class="adminArtTit">
                                                    ${element.title}
                                                </h2>
                                                <span class="adminArtInfo">
                                                    <span class="adminArticleAbout"><i class="far fa-clock adminArticleIcon"></i>${elmDate.getDate()}. ${monthName[elmDate.getMonth()]} KL. ${twoDigit(elmDate.getHours())}:${twoDigit(elmDate.getMinutes())}</span>
                                                    <span class="adminArticleAbout"><i class="far fa-eye adminArticleIcon"></i>${element.views} VISNINGER</span>
                                                    <span class="adminArticleAbout"><i class="fas fa-tag adminArticleIcon"></i>${catNameShort[element.category_fk-1]}</span>
                                                </span>
                                                <p class="adminArtDesc">
                                                    ${finalDesc}
                                                </p>
                                                <p class="adminArtEditor">
                                                    Af ${resultEditor[0].f_name} ${resultEditor[0].l_name}
                                                </p>
                                                <button class="adminArtEditBtn" onclick="editArticle(${element.id});">
                                                    <i class="fas fa-edit"></i>
                                                    Rediger
                                                </button>
                                                <a href="/article/${element.id}" class="adminArtShowBtn">
                                                    <i class="fas fa-external-link-alt"></i>
                                                    Vis på siden
                                                </a>
                                                <button class="adminArtDeleteBtn" onclick="removeArticle(${element.id});">
                                                    <i class="fas fa-times"></i>
                                                    Slet
                                                </button>
                                            </li>
                                        `;
                                    });
                                });
                            });

                        } else if(userRole == 2) {
                            const adminArtCatTit = document.getElementById("adminArtCatTit"); 
                            adminArtCatTit.innerHTML = catName[userCategory-1];
                            // ---------- editor show all articles from category ----------
                            fetch(`/articles/category/${userCategory}`)
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(resultAllArt) {
                                resultAllArt.forEach(element => {
                                    let elmDate = new Date(element.time*1000);
                                    let elmDesc = element.article;
                                    let finalDesc = '';
                                    if(elmDesc.length >= 200) {
                                        finalDesc = elmDesc.slice(0, 200);
                                        finalDesc += ' ...';
                                    } else {
                                        finalDesc = elmDesc;
                                    }
                                    fetch(`/editor/${element.editor_fk}`)
                                    .then(function(response) {
                                        return response.json();
                                    })
                                    .then(function(resultEditor) {
                                        adminArticleList.innerHTML += `
                                            <li class="adminArtItem">
                                                <h2 class="adminArtTit">
                                                    ${element.title}
                                                </h2>
                                                <span class="adminArtInfo">
                                                    <span class="adminArticleAbout"><i class="far fa-clock adminArticleIcon"></i>${elmDate.getDate()}. ${monthName[elmDate.getMonth()]} KL. ${twoDigit(elmDate.getHours())}:${twoDigit(elmDate.getMinutes())}</span>
                                                    <span class="adminArticleAbout"><i class="far fa-eye adminArticleIcon"></i>${element.views} VISNINGER</span>
                                                    <span class="adminArticleAbout"><i class="fas fa-tag adminArticleIcon"></i>Bil</span>
                                                </span>
                                                <p class="adminArtDesc">
                                                    ${finalDesc}
                                                </p>
                                                <p class="adminArtEditor">
                                                    Af ${resultEditor[0].f_name} ${resultEditor[0].l_name}
                                                </p>
                                                <button class="adminArtEditBtn" onclick="editArticle(${element.id});">
                                                    <i class="fas fa-edit"></i>
                                                    Rediger
                                                </button>
                                                <a href="/article/${element.id}" class="adminArtShowBtn">
                                                    <i class="fas fa-external-link-alt"></i>
                                                    Vis på siden
                                                </a>
                                                <button class="adminArtDeleteBtn" onclick="removeArticle(${element.id});">
                                                    <i class="fas fa-times"></i>
                                                    Slet
                                                </button>
                                            </li>
                                        `;
                                    });
                                });
                            });
                        }
                        const cmsSideNav = document.getElementById("cmsSideNav");
                        const cmsHeaderUsername = document.getElementById("cmsHeaderUsername");
                        // ---------- user full name in header ----------
                        cmsHeaderUsername.innerHTML = `${userFName} ${userLNname}`;
                        if(userRole == 1) {
                            // ---------- admin navigation ----------
                            cmsSideNav.innerHTML = `
                                <h1 id="cmsNavTitle">
                                    CMS Adminstrator
                                </h1>
                                <form id="cmsNavForm" action="/admin/search">
                                    <input id="cmsNavSubmit" type="submit" value="">
                                    <input id="cmsNavSearch" type="text" name="q" placeholder="søg..">
                                </form>
                                <ul id="cmsNavList">
                                    <li class="cmsNavListItem cmsNavListItemActive">
                                        <a class="cmsNavListLink" href="/admin">
                                            <i class="far fa-newspaper navIcon"></i>
                                            <span>Artikler</span>
                                        </a>
                                    </li>
                                    <li class="cmsNavListItem">
                                        <a class="cmsNavListLink" href="/admin/category">
                                            <i class="fas fa-edit navIcon"></i>
                                            <span>Kategorier</span>
                                        </a>
                                    </li>
                                    <li class="cmsNavListItem">
                                        <a class="cmsNavListLink" href="/admin/comment">
                                            <i class="fas fa-comment-dots navIcon"></i>
                                            <span>Kommentarer</span>
                                        </a>
                                    </li>
                                    <li class="cmsNavListItem">
                                        <a class="cmsNavListLink" href="/admin/editor">
                                            <i class="fas fa-users navIcon"></i>
                                            <span>Redaktører</span>
                                        </a>
                                    </li>
                                    <li class="cmsNavListItem">
                                        <a class="cmsNavListLink" href="/admin/contact">
                                            <i class="fas fa-phone-square navIcon"></i>
                                            <span>Kontakt</span>
                                        </a>
                                    </li>
                                    <li class="cmsNavListItem">
                                        <a class="cmsNavListLink" href="/admin/sponsor">
                                            <i class="fas fa-file-invoice-dollar navIcon"></i>
                                            <span>Sponsor</span>
                                        </a>
                                    </li>
                                </ul>
                            `;
                        } else if(userRole == 2) {
                            // ---------- editor navigation ----------
                            cmsSideNav.innerHTML = `
                                <h1 id="cmsNavTitle">
                                    CMS Redaktør
                                </h1>
                                <form id="cmsNavForm" action="/admin/search">
                                    <input id="cmsNavSubmit" type="submit" value="">
                                    <input id="cmsNavSearch" type="text" name="q" placeholder="søg..">
                                </form>
                                <ul id="cmsNavList">
                                    <li class="cmsNavListItem cmsNavListItemActive">
                                        <a class="cmsNavListLink" href="/admin">
                                            <i class="far fa-newspaper navIcon"></i>
                                            <span>Artikler</span>
                                        </a>
                                    </li>
                                    <li class="cmsNavListItem">
                                        <a class="cmsNavListLink" href="/admin/comment">
                                            <i class="fas fa-comment-dots navIcon"></i>
                                            <span>Kommentarer</span>
                                        </a>
                                    </li>
                                </ul>
                            `;
                        }
                    }
                });
            } else {
                // ---------- user error ----------
                logOut();
            }
        });
    } else {
        logOut();
    }

    const logOutBtn = document.getElementById("userLogOut");
    logOutBtn.addEventListener('click', (event) => {
        logOut();
    });
});

// ---------- log out user ----------
function logOut() {
    deleteCookie('usertoken');
    deleteCookie('userid');
    window.location = '/admin/signin';
}

// ---------- read cookie ----------
function readCookie(cookieName) {
    let nameTmp = cookieName + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameTmp) == 0) return c.substring(nameTmp.length,c.length);
    }
    return null;
}

// ---------- delete cookie ----------
function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// ---------- create cookie ----------
function createCookie(cookieName, cookieValue, expireInMinutes) {
    let cookieDate = new Date();
    cookieDate.setTime(cookieDate.getTime() + (expireInMinutes*60*1000));
    let expires = "expires="+ cookieDate.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// ---------- edit article ----------
function editArticle(articleId) {
    // ---------- fetch article by id ----------
    fetch(`/article/data/${articleId}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(resultEditArt) {
        // ---------- fetch all categories ----------
        fetch(`/category/all`)
        .then(function(response) {
            return response.json();
        })
        .then(function(resultSelect) {
            let categoryName = ['Bil', 'Båd', 'Bike'];
            let editArtHtml = ``;
            editArtHtml += `
                <div id="editArtMain">
                    <label class="editArtLabel">
                        Titel
                    </label>
                    <input type="text" value="${resultEditArt[0].title}" id="editArtTitle">
                    <label class="editArtLabel">
                        Kategori
                    </label>
                    <select id="editArtCat">
            `;
            resultSelect.forEach(element => {
                if(element.id == resultEditArt[0].category_id) {
                    editArtHtml += `
                        <option value="${element.id}" selected>
                            ${categoryName[element.id-1]}
                        </option>
                    `;
                } else {
                    editArtHtml += `
                        <option value="${element.id}">
                            ${categoryName[element.id-1]}
                        </option>
                    `;
                }
            });
            editArtHtml += `
                    </select>
                    <label class="editArtLabel">
                        Artikel
                    </label>
                    <textarea id="editArtText" name="test">${resultEditArt[0].article.toString()}</textarea>
                    <button id="editArtConfirm" onclick="updateArticle(${resultEditArt[0].id});">
                        <i class="far fa-check-circle"></i>
                        Udfør
                    </button>
                    <button id="editArtCancel" onclick="cancelArticle();">
                        <i class="fas fa-ban"></i>
                        Annuller
                    </button>
                </div>
            `;
            editArtCon.innerHTML = editArtHtml;
            editArtCon.style.visibility = 'visible';
        });
    });
}

// ---------- update article ----------
function updateArticle(articleId) {
    let categoryId = document.getElementById("editArtCat").value;
    let articleTitle = document.getElementById("editArtTitle").value;
    let articleText = document.getElementById("editArtText").value;
    if(articleTitle.length > 2) {
        if(articleText.length > 2) {
            // ---------- post article ----------
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            let init = {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify ({"articleid":articleId, "text": articleText, "category":categoryId, "title":articleTitle}),
                cache: 'no-cache',
                mode: 'cors'
            };
            let request = new Request('/update/article', init);
            fetch(request)
            .then(response => {
                return response.json();
            })
            .then((resultUpdateArt) => { 
                if(resultUpdateArt.affectedRows == 1) {
                    location.reload();
                } else {
                    alert('Der skete en fejl, prøv at genindlæs siden.');
                }
            });
        } else {
            alert('Artiklens tekst er for kort.');
        }
    } else {
        alert('Artiklens titel er for kort.');
    }
}

// ---------- cancel edit article ----------
function cancelArticle() {
    editArtCon.style.visibility = 'hidden';
}

// ---------- delete article ----------
function removeArticle(articleId) {
    let conDelete = confirm("Er du sikker på at du vil slette denne artikel? Handlingen kan ikke gøres om.");
    if (conDelete == true) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let init = {
            method: 'DELETE',
            headers: headers,
            body: JSON.stringify ({"articleid":articleId}),
            cache: 'no-cache',
            mode: 'cors'
        };
        let request = new Request('/delete/article', init);
        fetch(request)
        .then(response => {
            return response.json();
        })
        .then((resultDelArt) => { 
            if(resultDelArt.affectedRows == 1) {
                location.reload();
            } else {
                alert('Der skete en fejl, prøv at genindlæs siden.');
            }
        });
    }
}

// ---------- convert one digit to two digits ----------
function twoDigit(value) {
    value = value.toString();
    if(value.length == 1)
        return '0'+value;
    else
        return value;
}