/* 
    Javascript Sheet
*/

// Make Home page image scroll slower then the rest of the page
document.body.onscroll = function slowScroll() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("home-page");
    var xvalue = "center";
    var factor = 0.7;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}