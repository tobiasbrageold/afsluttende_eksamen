// ---------- document ready ----------
document.addEventListener("DOMContentLoaded", () => {
    const footerNewsField = document.getElementById("footerNewsField"); 
    const footerNewsAdd = document.getElementById("footerNewsAdd"); 
    const footerNewsRemove = document.getElementById("footerNewsRemove"); 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // ---------- news letter add email ----------
    footerNewsAdd.addEventListener('click', (event) => {
        let newsEmail = footerNewsField.value;
        if(isEmail(newsEmail) == true) {
            let init = {
                method: 'POST',
                headers: headers,
                body: `{"email":"${newsEmail}"}`,
                cache: 'no-cache',
                mode: 'cors'
            };
            let request = new Request('/newsletter/add', init);
            fetch(request)
            .then(response => {
                return response.json();
            })
            .then((result) => { 
                if(result.message == 'emailExist') {
                    alert('Du er allerede tilmeldt vores nyhedsbrev.');
                } else {
                    alert('Du er nu tilmeldt vores nyhedsbrev, tak!');
                    footerNewsField.value = '';
                }
            });
        } else {
            alert('Indtast venligst en gyldig e-mailadresse.');
        }
    });

    // ---------- news letter remove email ----------
    footerNewsRemove.addEventListener('click', (event) => {
        let newsEmail = footerNewsField.value;
        if(isEmail(newsEmail) == true) {
            let init = {
                method: 'DELETE',
                headers: headers,
                body: `{"email":"${newsEmail}"}`,
                cache: 'no-cache',
                mode: 'cors'
            };
            let request = new Request('/newsletter/remove', init);
            fetch(request)
            .then(response => {
                return response.json();
            })
            .then((result) => { 
                if(result.message == 'emailRemoved') {
                    alert('Du er nu frameldt vores nyhedsbrev.');
                    footerNewsField.value = '';
                } else {
                    alert('Du er endnu ikke tilmeldt vores nyhedsbrev.');
                }
            });
        } else {
            alert('Indtast venligst en gyldig e-mailadresse.');
        }
    });

    // ---------- fetch about ----------
    fetch(`/site/about`)
    .then(function(response) {
        return response.json();
    })
    .then(function(resultAbout) {
        const footerInfoRoad = document.getElementById("footerInfoRoad");
        const footerInfoCity = document.getElementById("footerInfoCity");
        const footerInfoCountry = document.getElementById("footerInfoCountry");
        const footerInfoPhone = document.getElementById("footerInfoPhone");
        const footerInfoFax = document.getElementById("footerInfoFax");
        const footerInfoEmail = document.getElementById("footerInfoEmail");
        footerInfoRoad.innerHTML = resultAbout[0].street;
        footerInfoCity.innerHTML = `${resultAbout[0].zip_code} ${resultAbout[0].city}`;
        footerInfoCountry.innerHTML = resultAbout[0].country;
        footerInfoPhone.innerHTML = `Telefon: ${resultAbout[0].phone}`;
        footerInfoFax.innerHTML = `Fax: ${resultAbout[0].fax}`;
        footerInfoEmail.innerHTML = `E-mail: ${resultAbout[0].email}`;
    });
});

// ---------- check if email ----------
function isEmail(email) {
    let expression = /\S+@\S+\.\S+/;
    return expression.test(email);
}