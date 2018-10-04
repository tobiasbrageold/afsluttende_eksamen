const mainContainer = document.getElementById("cmsMain");
const userDropdown = document.getElementById("cmsHeaderDrop");
const userNameDrop = document.getElementById("cmsHeaderUsername");
const cmsSideNav = document.getElementById("cmsSideNav");

// document ready
document.addEventListener("DOMContentLoaded", () => {
    scaleContentWidth(); 
    userDropdown.style.visibility = 'hidden';
    cmsSideNav.style.height = window.innerHeight+'px';
});

// mouse over user dropdown
userDropdown.onmouseover = () => {
    userDropHover = true;
}

// mouse away user dropdown
userDropdown.onmouseout = () => {
    userDropHover = false;
}

// window resize
window.addEventListener('resize', () => {
    scaleContentWidth();
});

// mouse click on document - hide dropdown
document.onmouseup = (e) => {
    let clickElement = e.toElement.id;
    if(userDropdown.style.visibility === 'hidden' && clickElement == 'cmsHeaderUsername' || clickElement == 'cmsHeaderUser') {
        userDropdown.style.visibility = 'visible';
        userNameDrop.style.backgroundImage = "url('/img/icon/arrow_up_dark.svg')";
    } else if(clickElement != 'cmsHeaderDrop') {
        userDropdown.style.visibility = 'hidden';
        userNameDrop.style.backgroundImage = "url('/img/icon/arrow_down_dark.svg')";
    }
}

// scale main container width
scaleContentWidth = () => {
    mainContainer.style.width = document.body.scrollWidth-280+"px";
}

// scale main container on load
scaleContentWidth();
