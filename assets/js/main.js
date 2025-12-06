import { HeroCarousel } from "./hero.js";

document.addEventListener("DOMContentLoaded", () => {
  const heroCarousel = new HeroCarousel("assets/data/hero.json", {
    title: "#hero-title",
    desc: "#hero-desc",
    img: "#hero-img",
    next: "#next",
    prev: "#prev",
  });

  // Hamburger menu functionality
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = navMenu.querySelectorAll("a");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !event.target.closest(".nav") &&
      navMenu.classList.contains("active")
    ) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
});

