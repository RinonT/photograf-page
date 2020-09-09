console.log("it works");
const main = document.querySelector("main");
const menu = document.querySelector(".page_navigation");
const openMenu = document.querySelector(".open_menu");
const heading = document.querySelector(".page_header_heading");
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