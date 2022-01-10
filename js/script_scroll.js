// This is our Javascript file. Here is where we define complex functionality.

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

var mediaQueryDesktop = window.matchMedia("(min-width: 1025px)");
var mediaQueryMobile = window.matchMedia("(max-width: 1024px)");

function scrollFunction() {
  if ((document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && mediaQueryDesktop.matches) {
    document.getElementById("big-logo").style.display = "none";
    document.getElementById("small-logo").style.display = "inline-block"
    document.getElementById("navigation").style.paddingTop = "48px"
    document.getElementById("navigation").style.paddingBottom = "48px"
  } else if (mediaQueryMobile.matches) {
    // Mobile width screen
    document.getElementById("big-logo").style.display = "none";
    document.getElementById("small-logo").style.display = "none"
    document.getElementById("navigation").style.paddingTop = "48px"
    document.getElementById("navigation").style.paddingBottom = "48px"
  } else {
    document.getElementById("big-logo").style.display = "inline-block";
    document.getElementById("small-logo").style.display = "none";
    document.getElementById("navigation").style.paddingTop = "100px"
    document.getElementById("navigation").style.paddingBottom = "100px"
  }
}
