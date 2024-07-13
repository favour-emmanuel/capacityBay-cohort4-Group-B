const hamburgerIcon = document.querySelector(".hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");

hamburgerIcon.addEventListener("click", function () {
  mobileMenu.classList.toggle("show");
  if (mobileMenu.classList.contains("show")) {
    hamburgerIcon.src = "./assets/icon-close.svg";
  } else {
    hamburgerIcon.src = "./assets/icon-hamburger.svg";
  }
});
