// js/main.js
import { HeroCarousel } from "./hero.js";

document.addEventListener("DOMContentLoaded", () => {
  const heroCarousel = new HeroCarousel("assets/data/hero.json", {
    title: "#hero-title",
    desc: "#hero-desc",
    img: "#hero-img",
    next: "#next",
    prev: "#prev",
  });
});
