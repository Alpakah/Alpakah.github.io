/* 
    Javascript Sheet
*/

// JS: Navbar turns transparent after scrolling from top
navbar = document.getElementById("nav-bar");
window.addEventListener("scroll", changeNavbar);

function changeNavbar(){
    if ($(window).scrollTop() > 0) {
        navbar.style.backgroundColor = "#282727FF";
        navbar.style.transition = "1s";
    }
    else {
        navbar.style.backgroundColor = "#28272700";
        navbar.style.transition = "1s";
    }
}

// Make Home page image scroll slower then the rest of the page
document.getElementById("body").onscroll = function myFunction() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("home-page");
    var xvalue = "center";
    var factor = 0.5;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}