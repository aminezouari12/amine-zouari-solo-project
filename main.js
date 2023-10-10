
function filterSelection(c) {
  var x= document.getElementsByClassName("gallery-item")
  for (i = 0; i < x.length; i++) {
    if (c === "all" || x[i].classList.contains(c)) {
      x[i].style.display = "block"
    } else {
      x[i].style.display = "none"
    }
  }
}
// Show filtered elements
function AddClass(element, name) {
  var  arr1=element.className.split(" ") 
  var arr2 = name.split(" ")
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i]
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var arr1 = element.className.split(" ")
 var arr2 = name.split(" ")
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1)
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var buttonContainer = document.getElementById("myBtnContainer");
var buttons = buttonContainer.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    className += " active";
  });
}
// JavaScript for the modal functionality
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get all elements with class "myImg" (your images)
var images = document.getElementsByClassName("myImg");

// Loop through all images and add a click event listener
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
