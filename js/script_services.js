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

// This function adds image click-through functionality for img 1 to img 2
function change(){
  var img = document.getElementById("changeimg");
  var txt = document.getElementById("services_txt");
  if (img.src.endsWith("img/img1.png")) {
    img.src = "img/img2.png";
    txt.innerHTML = "TECH PACK MANAGEMENT";
  } else if (img.src.endsWith("img/img2.png")) {
    img.src = "img/img3.png";
    txt.innerHTML = "TECHNICAL FIT SUPPORT";
  } else {
    img.src = "img/img1.png";
    txt.innerHTML = "COLLECTION DESIGN";
  }
}

// This function adds accordian functionality

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
