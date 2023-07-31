// Function to change the background image
var currentImage = 1;
var totalImages = 3; // Total number of background images

function changeBackground() {
  var element = document.getElementById("myStyle");
  currentImage = (currentImage % totalImages) + 1;
  element.style.backgroundImage = "url('./assets/img/style" + currentImage + ".svg')";
}

// Start the continuous loop
setInterval(changeBackground, 6000); // 6000 milliseconds = 6 second

// grab everything we need
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// add event listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
