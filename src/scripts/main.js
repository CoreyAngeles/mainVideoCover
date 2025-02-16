AOS.init();

const burgerButton = document.querySelector(".burger-menu__button");
const burgerMenu = document.querySelector(".burger-menu");
const burgerLinks = document.querySelectorAll(".burger-menu .link");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});

burgerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerButton.classList.remove("active");
    burgerMenu.classList.remove("active");
  });
});
