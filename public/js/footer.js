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
});

// ---------- check if email ----------
function isEmail(email) {
    let expression = /\S+@\S+\.\S+/;
    return expression.test(email);
}