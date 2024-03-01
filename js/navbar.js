/* 
    Javascript Sheet

    Navigation Bar for alexanderpak.com
*/

// JS: Navbar turns solid after scrolling from top
navbar = document.getElementById("nav-bar");
window.addEventListener("scroll", changeNavbar);

function changeNavbar(){
    if ($(window).scrollTop() > 0) {
        navbar.style.backgroundColor = "#111111FF";
        navbar.style.transition = "1s";
    }
    else {
        navbar.style.backgroundColor = "#11111100";
        navbar.style.transition = "1s";
    }
}

// Close sidebar when rest of mainbody is clicked
function hideSidebar() {
    document.getElementById("hamburger-check").checked = false;
}

document.getElementById("page-dim").addEventListener("click", hideSidebar);


