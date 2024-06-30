/*

* 

*/

// Show Video Youtube
document.querySelectorAll(".video__wrapper").forEach((container) => {
  const playButton = container.querySelector(".--play");
  const videoOverlay = container.querySelector(".--overlay");
  const iframe = container.querySelector("iframe");

  playButton.addEventListener("click", function () {
    const videoUrl = container.getAttribute("data-video-url");
    iframe.src = videoUrl;
    videoOverlay.style.display = "flex";
  });

  videoOverlay.addEventListener("click", function () {
    iframe.src = "";
    videoOverlay.style.display = "none";
  });
});

/*

* 

*/

// Show Sidebar Drawer
document.addEventListener("DOMContentLoaded", function () {
  const openBtns = document.querySelectorAll("[data-mobile-menu-open-btn]");
  const closeBtns = document.querySelectorAll("[data-mobile-menu-close-btn]");
  const overlays = document.querySelectorAll("[data-modal-overlay]");

  openBtns.forEach(function (openBtn) {
    openBtn.addEventListener("click", function (event) {
      event.preventDefault();
      const target = this.getAttribute("data-mobile-menu-open-btn");
      const sidebar = document.querySelector(`[data-mobile-menu="${target}"]`);
      const overlay = document.querySelector("[data-modal-overlay]");

      const openSidebars = document.querySelectorAll(
        "[data-mobile-menu].active"
      );
      openSidebars.forEach(function (openSidebar) {
        openSidebar.classList.remove("active");
      });

      if (sidebar && overlay) {
        sidebar.classList.add("active");
        overlay.classList.add("active");
      } else {
        console.error("Sidebar or overlay not found");
      }
    });
  });

  closeBtns.forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
      const sidebar = this.closest("[data-mobile-menu]");
      const overlay = document.querySelector("[data-modal-overlay]");

      if (sidebar && overlay) {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
      } else {
        console.error("Sidebar or overlay not found");
      }
    });
  });

  overlays.forEach(function (overlay) {
    overlay.addEventListener("click", function () {
      const sidebars = document.querySelectorAll("[data-mobile-menu]");
      if (sidebars) {
        sidebars.forEach(function (sidebar) {
          sidebar.classList.remove("active");
        });
      } else {
        console.error("Sidebars not found");
      }
      this.classList.remove("active");
    });
  });
});

/*

* 

*/

// Swiper
$(document).ready(function () {
  var swiper = new Swiper(".swiper-news", {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: false,
    effect: "crossfade",
    speed: 500,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        updateSwiperCount(this);
      },
      slideChange: function () {
        updateSwiperCount(this);
      },
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      520: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1099: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 3,
      },
    },
  });

  function updateSwiperCount(swiper) {
    var currentSlide = swiper.realIndex + 1; // Real index starts from 0, so add 1
    var totalSlides = swiper.slides.length;
    $(".swiper__current-slide").text(currentSlide);
    $(".swiper__total-slides").text(totalSlides);
  }
});
