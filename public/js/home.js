// ---------- document ready ----------
document.addEventListener("DOMContentLoaded", () => {
    // ---------- fetch newest 6 articles ----------
    fetch(`/articles/newest/6`)
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        const indexArList = document.getElementById("indexArticleList"); 
        const monthName = ['JANUAR', 'FEBRUAR', 'MARTS', 'APRIL', 'MAJ', 'JUNI', 'JULI', 'AUGUST', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DECEMBER'];
        const categoryName = ['BIL', 'BÅD', 'BIKE'];
        result.forEach(element => {
            // ---------- fetch comments ----------
            fetch(`/comments/count/${element.id}`)
            .then(function(response) {
                return response.json();
            })
            .then(function(resultCom) {
                let elmCommCount = resultCom[0].comments;
                let elmDate = new Date(element.time*1000);
                let elmDesc = element.article;
                let elmTit = element.title;
                let finalDesc = '';
                let finalTit = '';
                if(elmTit.length >= 28) {
                    finalTit = elmDesc.slice(0, 28);
                    finalTit += ' ...';
                } else {
                    finalTit = elmTit;
                }
                if(elmDesc.length >= 200) {
                    finalDesc = elmDesc.slice(0, 200);
                    finalDesc += ' ...';
                } else {
                    finalDesc = elmDesc;
                }
                indexArList.innerHTML += `
                    <li class="indexArticleItem">
                        <h2 class="indexArticleTitle">
                            ${finalTit}
                        </h2>
                        <span class="indexArticleInfoSpan">
                            <span class="indexArticleAbout"><i class="far fa-clock indexArticleIcon"></i>${elmDate.getDate()}. ${monthName[elmDate.getMonth()]} KL. ${twoDigit(elmDate.getHours())}:${twoDigit(elmDate.getMinutes())}</span>
                            <span class="indexArticleAbout"><i class="fas fa-comments indexArticleIcon"></i>${elmCommCount} KOMMENTARER</span>
                            <span class="indexArticleAbout"><i class="far fa-eye indexArticleIcon"></i>${element.views} VISNINGER</span>
                        </span>
                        <p class="indexArticleDescription">
                            ${finalDesc}
                        </p>
                        <span class="indexArticleTagCon">
                            <span class="indexArticleTag"><i class="fas fa-tag indexArticleIcon"></i>${categoryName[element.category_id-1]}</span>
                        </span>
                        <a class="indexArticleMore" href="/article/${element.id}">
                            LÆS MERE
                        </a>
                    </li>
                `;
            });
        });
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
});

// ---------- convert one digit to two digits ----------
function twoDigit(value) {
    value = value.toString();
    if(value.length == 1)
        return '0'+value;
    else
        return value;
}