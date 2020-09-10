console.log("it works");
const main = document.querySelector("main");
const menu = document.querySelector(".page_navigation");
const openMenu = document.querySelector(".open_menu");
const heading = document.querySelector(".page_header_heading");

var slideIndex = 1;
showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("image_slides");
  var dots = document.getElementsByClassName("image_slider"); 
//   var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
}

// A function that displays the menu
const showMenu = () => {
  menu.classList.remove('close');
  menu.classList.add('open');
}

// This is a function that hides the menue
const removeMenu = () => {
  menu.classList.add('close');
}

openMenu.addEventListener("click", showMenu)
main.addEventListener("click", removeMenu);
heading.addEventListener("click", removeMenu);