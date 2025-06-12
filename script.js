let lastScrollTop = 0;
const topNavbar = document.getElementById("top-navbar");
const mainNavbar = document.querySelector(".main-navbar");

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Scroll Down - Hide Top Navbar and move Main Navbar up
  if (currentScroll > lastScrollTop) {
    topNavbar.classList.add("hidden");
    mainNavbar.classList.add("hidden");
  } else {
    // Scroll Up - Show Top Navbar and move Main Navbar back
    topNavbar.classList.remove("hidden");
    mainNavbar.classList.remove("hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  burger.classList.toggle('open'); // Optionally animate burger icon
});