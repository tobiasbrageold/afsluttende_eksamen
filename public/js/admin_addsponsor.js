// ---------- comment add ----------
document.addEventListener("DOMContentLoaded", () => {
    let roleNotAllow = 2;
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
                                    <li class="cmsNavListItem cmsNavListItemActive">
                                        <a class="cmsNavListLink" href="/admin/sponsor">
                                            <i class="fas fa-file-invoice-dollar navIcon"></i>
                                            <span>Sponsor</span>
                                        </a>
                                    </li>
                                </ul>
                            `;

                            const submit = document.getElementById("test");
                            submit.addEventListener('click', (event) => {
                                document.getElementById("myForm").submit();
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