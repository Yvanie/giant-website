
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    // Get the current page URL (using window.location.pathname)
    const currentPage = window.location.pathname.split("/").pop();

    // Loop through all links and add 'active' class to the current page's link
    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");
        if (linkHref === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

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
 AOS.init();
 AOS.init({
  once: true, // This will trigger the animation only once when it comes into view
  duration: 500, // Optional, adjust speed
});
