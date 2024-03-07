/* 
    Javascript Sheet
*/

// Make all title pages image scroll slower then the rest of the page
document.body.onscroll = function slowScroll() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementsByClassName("header-block");
    var xvalue = "center";
    var factor = 0.7;
    var yvalue = scrolltotop * factor;

    for (var i = 0; i < target.length; i++) {
        target[i].style.backgroundPosition = xvalue + " " + yvalue + "px";
    }
}

// Reduce start of video volume to 25% of original volume
$("video").prop("volume", 0.1);