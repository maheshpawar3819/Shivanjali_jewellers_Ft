// Mobile menu toggle
document.getElementById("mobileBtn").addEventListener("click", () => {
  alert("Mobile menu: implement as needed");
});

// Hero Slider
const heroSwiper = new Swiper(".heroSwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletActiveClass: "!bg-yellow-500",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

// Gallery Slider
const gallerySwiper = new Swiper(".gallerySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  effect: "cube",
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
});

// Featured Products Slider
const featuredSwiper = new Swiper(".featuredSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next-featured",
    prevEl: ".swiper-button-prev-featured",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Testimonial Slider
const testimonialSwiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletActiveClass: "!bg-yellow-500",
  },
  effect: "slide",
});
