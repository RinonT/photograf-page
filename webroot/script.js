 // Grab all the necessary elements from the html
const main = document.querySelector("main");
const menu = document.querySelector(".page_navigation");
const openMenu = document.querySelector(".open_menu");
const heading = document.querySelector(".page_header_heading");

const slideNext = document.querySelector(".next");
const slidePrev = document.querySelector(".prev");
 
// Grab the container that displays the full image
const slides = document.querySelectorAll(".image_slides");
// The image element
const images = document.querySelectorAll(".image_slider"); 

// Get access to the next and pre arrow
const arrowNext = document.querySelector(".arrow_next");
const arrowPrev = document.querySelector(".arrow_prev");

// Initializing the index of the image
let slideIndex = 1;

// A reusable function that displays the images when an event happens
const showImages = (n) => {
  let i;
  
  if (n > slides.length) {
     slideIndex = 1 
  }  

  if(n < 1 ) {
    slideIndex = slides.length
  };

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  images[slideIndex-1].className += " active"; 
}

showImages(slideIndex);

const nextImages = (n) => {
  showImages(slideIndex += n);
}

const currentImage = (n) => {
  showImages(slideIndex = n);
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

arrowNext.addEventListener("click", showNextImage = () => {
  nextImages(+1);
});

arrowPrev.addEventListener("click", showPrevImage = () => {
  nextImages(-1);
})
 
 