// ---------- comment add ----------
document.addEventListener("DOMContentLoaded", () => {
    let roleNotAllow = 2;
    const editEdiCon = document.getElementById("editEdiCon");  
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
                            // ---------- admin logged in ----------
                            const cmsSideNav = document.getElementById("cmsSideNav");
                            const cmsHeaderUsername = document.getElementById("cmsHeaderUsername");
                            // ---------- user full name in header ----------
                            cmsHeaderUsername.innerHTML = `${userFName} ${userLNname}`;
                            // ---------- admin navigation ----------
                            cmsSideNav.innerHTML = `
                                <h1 id="cmsNavTitle">
                                    CMS Adminstrator
                                </h1>
                                <ul id="cmsNavList">
                                    <li class="cmsNavListItem">
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
                                    <li class="cmsNavListItem cmsNavListItemActive">
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

                            // ---------- fetch all editors ----------
                            fetch(`/editors/all`)
                            .then(function(response) {
                                return response.json();
                            })
                            .then(function(resultEditor) {
                                const adminArticleList = document.getElementById("adminArticleList");
                                resultEditor.forEach(element => {
                                    let categoryName = ["Bil", "Båd", "Bike"];
                                    adminArticleList.innerHTML += `
                                        <li class="adminArtItem">
                                            <h2 class="adminArtTit">
                                                ${element.f_name} ${element.l_name}
                                            </h2>
                                            <span class="adminArtInfo">
                                                <span class="adminArticleAbout"><i class="fas fa-tag adminArticleIcon"></i>${categoryName[element.category_fk-1]}</span>
                                            </span>
                                            <p class="adminEdiDesc">
                                                ${element.about}
                                            </p>
                                            <button class="adminArtEditBtn" onclick="editEditor(${element.id});">
                                                <i class="fas fa-edit"></i>
                                                Rediger
                                            </button>
                                            <button class="adminArtDeleteBtn" onclick="removeEditor(${element.id});">
                                                <i class="fas fa-times"></i>
                                                Slet
                                            </button>
                                        </li>
                                    `;
                                });
                            });



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

// ---------- update editor ----------
function updateEditor(editorId) {
    const editEdiFName = document.getElementById("editEdiFName").value;
    const editEdiLName = document.getElementById("editEdiLName").value;
    const editEdiCat = document.getElementById("editEdiCat").value;
    const editEdiRole = document.getElementById("editEdiRole").value;
    const editEdiText = document.getElementById("editEdiText").value;

    // ---------- XXX MANGLER VALIDERING XXX ----------

    // ---------- post editor ----------
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let init = {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify ({"editorid":editorId, "fname": editEdiFName, "lname":editEdiLName, "category":editEdiCat, "role":editEdiRole, "text":editEdiText}),
        cache: 'no-cache',
        mode: 'cors'
    };
    let request = new Request('/update/editor', init);
    fetch(request)
    .then(response => {
        return response.json();
    })
    .then((resultUpdateEdi) => { 
        if(resultUpdateEdi.affectedRows == 1) {
            location.reload();
        } else {
            alert('Der skete en fejl, prøv at genindlæs siden.');
        }
    });
}

// ---------- edit editor ----------
function editEditor(editorId) {
    // ---------- fetch editor by id ----------
    fetch(`/editor/${editorId}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(resultEditor) {
        // ---------- fetch all categories ----------
        fetch(`/category/all`)
        .then(function(response) {
            return response.json();
        })
        .then(function(resultSelect) {
            // ---------- fetch all roles ----------
            fetch(`/roles/all`)
            .then(function(response) {
                return response.json();
            })
            .then(function(resultRole) {
                let categoryName = ['Bil', 'Båd', 'Bike'];
                let roleName = ['Adminstrator', 'Redaktør'];
                let editEdiHtml = ``;
                editEdiHtml = `
                    <div id="editEdiMain">
                        <label class="editArtLabel">
                            Fornavn
                        </label>
                        <input type="text" value="${resultEditor[0].f_name}" id="editEdiFName" class="editEdiInput">
                        <label class="editArtLabel">
                            Efternavn
                        </label>
                        <input type="text" value="${resultEditor[0].l_name}" id="editEdiLName" class="editEdiInput">
                        <label class="editArtLabel">
                            Kategori
                        </label>
                        <select id="editEdiCat">
                `;

                resultSelect.forEach(element => {
                    if(element.id == resultEditor[0].category_fk) {
                        editEdiHtml += `
                            <option value="${element.id}" selected>
                                ${categoryName[element.id-1]}
                            </option>
                        `;
                    } else {
                        editEdiHtml += `
                            <option value="${element.id}">
                                ${categoryName[element.id-1]}
                            </option>
                        `;
                    }
                });

                editEdiHtml += `
                        </select>
                        <label class="editArtLabel">
                            Rolle
                        </label>
                        <select id="editEdiRole">
                `;

                resultRole.forEach(element => {
                    if(element.id == resultEditor[0].role_fk) {
                        editEdiHtml += `
                            <option value="${element.id}" selected>
                                ${roleName[element.id-1]}
                            </option>
                        `;
                    } else {
                        editEdiHtml += `
                            <option value="${element.id}">
                                ${roleName[element.id-1]}
                            </option>
                        `;
                    }
                });

                editEdiHtml += `
                        </select>
                        <label class="editArtLabel">
                            Om
                        </label>
                        <textarea id="editEdiText">${resultEditor[0].about}</textarea>
                        <button id="editArtConfirm" onclick="updateEditor(${resultEditor[0].id});">
                            <i class="far fa-check-circle"></i>
                            Udfør
                        </button>
                        <button id="editArtCancel" onclick="cancelAddEditor();">
                            <i class="fas fa-ban"></i>
                            Annuller
                        </button>
                    </div>
                `;

                editEdiCon.innerHTML = editEdiHtml;
                editEdiCon.style.visibility = 'visible';
            });
        });
    });
}

// ---------- cancel add editor ----------
function cancelAddEditor() {
    editEdiCon.style.visibility = 'hidden';
}

// ---------- delete editor ----------
function removeEditor(editorId) {
    let conDelete = confirm("Er du sikker på at du vil slette denne redaktør? Handlingen kan ikke gøres om.");
    if (conDelete == true) {
        // ---------- delete editor ----------
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let init = {
            method: 'DELETE',
            headers: headers,
            body: JSON.stringify ({"editorid":editorId}),
            cache: 'no-cache',
            mode: 'cors'
        };
        let request = new Request('/remove/editor', init);
        fetch(request)
        .then(response => {
            return response.json();
        })
        .then((resultRemoveEdi) => { 
            if(resultRemoveEdi.affectedRows == 1) {
                location.reload();
            } else {
                alert('Der skete en fejl, prøv at genindlæs siden.');
            }
        });
    }
}