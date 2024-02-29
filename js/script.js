/* 
    Javascript Sheet
*/

// JS: Navbar turns transparent after scrolling from top
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

// Make Home page image scroll slower then the rest of the page
document.body.onscroll = function slowScroll() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("home-page");
    var xvalue = "center";
    var factor = 0.7;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}