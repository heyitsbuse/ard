// This is our Javascript file. Here is where we define complex functionality.


// This function adds hamburger menu functionality for mobile/tablet screens
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  } else {
    x.style.display = "inline-block";
  }
}

function hamburgerFunction() {
  var hamburger = document.getElementById("hamburger");
  var close_hamburger = document.getElementById("close_hamburger");

  if (hamburger.style.display === "inline-block" || hamburger.style.display === "") {
    hamburger.style.display = "none";
    close_hamburger.style.display = "inline-block";
  } else {
    hamburger.style.display = "inline-block";
    close_hamburger.style.display = "none";
  }
}
