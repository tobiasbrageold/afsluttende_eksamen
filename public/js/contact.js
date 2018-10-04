// ---------- document ready ----------
document.addEventListener("DOMContentLoaded", () => {
    const contactSubmit = document.getElementById("commentSubmit");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // ---------- breadcrumbs ----------
    const Elmbreadcrumb = document.getElementById("siteBreadcrumb");
    Elmbreadcrumb.innerHTML = `
        <a id="breadcrumbHome" href="/">
            Forside
        </a>
        <span id="breadcrumbSeperator">
            /
        </span>
        <a id="breadcrumbOther" href="/contact">
            Kontakt
        </a>
    `;

    // ---------- fetch about ----------
    fetch(`/site/about`)
    .then(function(response) {
        return response.json();
    })
    .then(function(resultAbout) {
        const contactInfoCon = document.getElementById("contactInfoCon");
        console.log(resultAbout);
        contactInfoCon.innerHTML = `
            <div class="contactAddCon">
                <i id="contactAddIco" class="fas fa-map-marker-alt"></i>
                <h2 id="contactAddTit">Adresse</h2>
                <span class="contactInfoSub">
                    ${resultAbout[0].street}
                </span>
                <span class="contactInfoSub">
                    ${resultAbout[0].zip_code} ${resultAbout[0].city}
                </span>
                <span class="contactInfoSub">
                    ${resultAbout[0].country}
                </span>
            </div>
            <div class="contactAddCon">
                <h2 id="contactDatTit">Kontaktoplysninger</h2>
                <span class="contactInfoSub">
                    <i class="fas fa-phone"></i>
                    Telefon: ${resultAbout[0].phone}
                </span>
                <span class="contactInfoSub">
                    <i class="fas fa-fax"></i>
                    Fax: ${resultAbout[0].fax}
                </span>
                <span class="contactInfoSub">
                    <i class="fas fa-envelope"></i>
                    E-mail: ${resultAbout[0].email}
                </span>
            </div>
        `;
    });

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

    // ---------- add message ----------
    contactSubmit.addEventListener('click', (event) => {
        let elmConName = document.getElementById("commentName");
        let elmConMail = document.getElementById("commentMail");
        let elmConSubj = document.getElementById("commentSubject");
        let elmConMess = document.getElementById("commentMessage");
        if(elmConName.value.length < 2) {
            alert('Dit navn er for kort.');
        } else {
            if(elmConMail.value.length < 2 || isEmail(elmConMail.value) == false) {
                alert('Din e-mailadresse er ugyldig.');
            } else {
                if(elmConMess.value.length < 2) {
                    alert('Din kommentar er for kort');
                } else {
                    if(elmConSubj.value.length < 2) {
                        alert('Dit emne er for kort');
                    } else {
                        // add message
                        let init = {
                            method: 'POST',
                            headers: headers,
                            body: `{"name":"${elmConName.value}", "email":"${elmConMail.value}", "subject":"${elmConSubj.value}", "message":"${elmConMess.value}", "time":"${Math.round((new Date()).getTime() / 1000)}"}`,
                            cache: 'no-cache',
                            mode: 'cors'
                        };
                        let request = new Request('/message/add', init);
                        fetch(request)
                        .then(response => {
                            return response.json();
                        })
                        .then((result) => { 
                            if(result.affectedRows == 1) {
                                // ---------- clear fields ----------
                                elmConName.value = '';
                                elmConMail.value = '';
                                elmConSubj.value = '';
                                elmConMess.value = '';
                                alert('Tak for din besked, vi bestræber os på at svare indenfor 2 - 3 hverdage.');
                            }
                        });
                    }
                }
            }
        }
    });
});

// ---------- is email----------
function isEmail(email) {
    let expression = /\S+@\S+\.\S+/;
    return expression.test(email);
}