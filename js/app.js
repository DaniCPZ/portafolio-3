$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    appendDots: ".slider-dots",
    dotsClass: "dots",
  });
  let hamberger = document.querySelector(".hamberger");
  let times = document.querySelector(".times");
  let mobileNav = document.querySelector(".mobile-nav");
  let nav = document.querySelectorAll(".mobile-nav ul li");

  hamberger.addEventListener("click", () => {
    mobileNav.classList.add("open");
    for (let i = 0; i < nav.length; i++) {
      nav[i].addEventListener("click", function () {
        mobileNav.classList.remove("open");
      });
    }
  });
  times.addEventListener("click", () => {
    mobileNav.classList.remove("open");
  });
});
