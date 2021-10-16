//== Left menu onclick function start *==//
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
  let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
  arrowParent.classList.toggle("showMenu");
  });
}
//== Left menu onclick function end *==//

/* Loop through all dropdown menus to toggle between hiding and showing its dropdown content - 
This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("arrow-none");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
//== Right menu onclick function end *==//

// responsive sidebar js
function w3_open() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
