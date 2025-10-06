//............ jQuery animations for screen transitions
$(document).ready(function () {
  $(".screen1").delay(100).animate({ top: "-100vh" }, 100);
  // setTimeout(function () {
  //   $(".video")[0].play(); // Play the first video element
  // }, 3000);
  $(".video, .loader").delay(2000).animate({ top: "-100vh" });
});

//....................Header scroll behavior
$(document).ready(function () {
  let initialScroll = 0;
  $(window).scroll(function () {
    let finalScroll = $(this).scrollTop();
    if (finalScroll > initialScroll) {
      $(".sub-header").css("top", "-40px");
      $("header").css("top", "-140px");
      $("header").css("background-color", "#0F1220");
    } else if (finalScroll === 0) {
      $("header").css("background-color", "transparent");
      $(".sub-header").css("top", "0");
      $("header").css("top", "40px");
      $(".dropdown").css("top", "140px");
    } else {
      $("header").css("top", "0px");
      $(".dropdown").css("top", "100px");
    }
    initialScroll = finalScroll;
  });
});

const carouselRow = document.querySelector(".swiper-wrapper");
const carouselSlides = document.querySelectorAll(".swiper-slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const buttons = document.querySelectorAll(".hero-btn");

let index = 1;
var width;
let deleteInterval;

function slideWidth() {
  width = carouselSlides[0].clientWidth;
}
slideWidth();
window.addEventListener("resize", slideWidth);
carouselRow.style.transform = "translateX(" + -width * index + "px)";

nextBtn.addEventListener("click", nextSlide);
function nextSlide() {
  if (index >= carouselSlides.length - 1) {
    return;
  }
  carouselRow.style.transition = "transform 0.3s linear";
  index++;
  carouselRow.style.transform = "translateX(" + -width * index + "px)";
}

prevBtn.addEventListener("click", prevSlide);
function prevSlide() {
  if (index <= 0) {
    return;
  }
  carouselRow.style.transition = "transform 0.3s linear";
  index--;
  carouselRow.style.transform = "translateX(" + -width * index + "px)";
}

carouselRow.addEventListener("transitionend", function () {
  if (carouselSlides[index].id === "firstImgDuplicate") {
    carouselRow.style.transition = "none";
    index = carouselSlides.length - index;
    carouselRow.style.transform = "translateX(" + -width * index + "px)";
  }
  if (carouselSlides[index].id === "lastImgDuplicate") {
    carouselRow.style.transition = "none";
    index = carouselSlides.length - 2;
    carouselRow.style.transform = "translateX(" + -width * index + "px)";
  }
});

function autoSlide() {
  deleteInterval = setInterval(timer, 3500);
  function timer() {
    nextSlide();
  }
}
autoSlide();

function stopAutoSlide() {
  clearInterval(deleteInterval);
}

function resumeAutoSlide() {
  autoSlide();
}

buttons.forEach((button) => {
  button.addEventListener("mouseover", stopAutoSlide);
  button.addEventListener("mouseout", resumeAutoSlide);
});

nextBtn.addEventListener("mouseover", stopAutoSlide);
nextBtn.addEventListener("mouseout", resumeAutoSlide);

prevBtn.addEventListener("mouseover", stopAutoSlide);
prevBtn.addEventListener("mouseout", resumeAutoSlide);

//.........dropdown menu.............//
// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     loop: true, // Enable looping
//     items: 2, // Number of items to display at a time
//     margin: 20, // Space between items
//     nav: true, // Enable navigation arrows
//     dots: true, // Enable dots for navigation
//     onInitialized: function (event) {
//       // This ensures the first item is visible after initialization
//       $(this).trigger("refresh.owl.carousel");
//     },
//     responsive: {
//       0: {
//         items: 1, // 1 item on small screens
//       },
//       768: {
//         items: 2, // 2 items on larger screens
//       },
//     },
//   });
// });

//..............dropdown slider..........//

// let slider = document.querySelector(".adv-slider");
// let advNext = document.querySelector(".adv-btn-prev");
// let advPrev = document.querySelector(".adv-btn-next");

// slider.addEventListener("wheel", (e) => {
//   e.preventDefault();
//   slider.scrollLeft += e.deltaY;
//   slider.style.scrollBehavior = "auto";
// });

// advNext.addEventListener("click", () => {
//   slider.style.scrollBehavior = "smooth";
//   slider.scrollLeft += 100;
// });

// advPrev.addEventListener("click", () => {
//   slider.style.scrollBehavior = "smooth";
//   slider.scrollLeft -= 100;
// });

// Select the slider and buttons
$(document).ready(function () {
  $(".multiSlide").owlCarousel({
    center: true,
    loop: true,
    items: 2,
    margin: 20,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    dots: false,
    autoWidth: true,
    rewind: true,
    nav: true,
    // responsiveClass: true,
    // responsive: {
    //   0: {
    //     items: 1,
    //     loop: true,
    //   },
    //   720: {
    //     items: 2,
    //     loop: true,
    //   },
    //   768: {
    //     items: 2,
    //     loop: true,
    //   },
    //   992: {
    //     items: 3,
    //     loop: true,
    //   },
    // },
  });
});
//.......cate head img....

let activeCate = document.querySelectorAll(".cate-head> img");
let btmMen = document.querySelectorAll(".btm-items");

activeCate[0].classList.add("cate-head-img");
btmMen[0].style.transform = "translateX(0vw)";

activeCate[0].addEventListener("click", function () {
  activeCate[0].classList.add("cate-head-img");
  activeCate[1].classList.remove("cate-head-img");
  activeCate[2].classList.remove("cate-head-img");
  btmMen[0].style.transform = "translateX(0%)";
  btmMen[1].style.transform = "translateX(100vw)";
  btmMen[2].style.transform = "translateX(100vw)";
});

activeCate[1].addEventListener("click", function () {
  activeCate[0].classList.remove("cate-head-img");
  activeCate[1].classList.add("cate-head-img");
  activeCate[2].classList.remove("cate-head-img");
  btmMen[0].style.transform = "translateX(100vw)";
  btmMen[1].style.transform = "translateX(-100%)";
  btmMen[2].style.transform = "translateX(100vw)";
});

activeCate[2].addEventListener("click", function () {
  activeCate[0].classList.remove("cate-head-img");
  activeCate[1].classList.remove("cate-head-img");
  activeCate[2].classList.add("cate-head-img");
  btmMen[0].style.transform = "translateX(100vw)";
  btmMen[1].style.transform = "translateX(100vw)";
  btmMen[2].style.transform = "translateX(-200%)";
});
//........add active class to cate head........//

document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".cate-head");

  categories.forEach((category) => {
    category.addEventListener("click", () => {
      // Remove the active class from all categories
      categories.forEach((cat) => cat.classList.remove("active-cate"));

      // Add the active class to the clicked category
      category.classList.add("active-cate");
    });
  });
});
//............AOS.....................//
AOS.init({
  offset: 140,
  duration: 2000,
});

//..........color change of the top image .............//

document.addEventListener("DOMContentLoaded", function () {
  let itemBoxes = document.querySelectorAll(".item-box");

  itemBoxes.forEach((itemBox) => {
    const midImages = itemBox.querySelectorAll(".item-box-mid img");
    const topImages = itemBox.querySelectorAll(".item-box-top img");

    midImages.forEach((midImage, index) => {
      midImage.addEventListener("click", () => {
        // Remove the 'active' class from all top images
        topImages.forEach((topImage) => {
          topImage.classList.remove("active");
        });

        // Add the 'active' class to the corresponding top image
        topImages[index].classList.add("active");
      });
    });
  });
});

//.....wishlist...........//
let wishlist = document.querySelectorAll(".wishlist");
let loveFill = document.querySelectorAll(".love-icon");

loveFill.forEach(function (item, index) {
  item.addEventListener("click", function () {
    item.classList.toggle("active-love");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const itemBoxes = document.querySelectorAll(".item-box");

  itemBoxes.forEach((itemBox) => {
    const wishlist = itemBox.querySelector(".wishlist");
    const loveIcon = itemBox.querySelector(".love-icon");

    itemBox.addEventListener("mouseenter", () => {
      if (!wishlist.classList.contains("stay-visible")) {
        wishlist.style.top = "5px";
      }
    });

    itemBox.addEventListener("mouseleave", () => {
      if (!wishlist.classList.contains("stay-visible")) {
        wishlist.style.top = "-75px";
      }
    });

    loveIcon.addEventListener("click", () => {
      wishlist.classList.toggle("stay-visible");
      if (wishlist.classList.contains("stay-visible")) {
        wishlist.style.top = "5px";
      } else {
        wishlist.style.top = "-75px";
      }
    });
  });
});

//.............fam-slider...............//

$(document).ready(function () {
  // Initialize the Owl Carousel and store the instance
  var owl = $("#fam-item-slider").owlCarousel({
    center: true,
    loop: true,
    margin: 80,
    autoplay: true,
    autoplayHoverPause: false,
    autoplayTimeout: 3000,
    dots: false,
    autoWidth: false,
    rewind: true,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        center: true,
        margin: 10,
      },

      576: {
        items: 1,
        center: true,
        margin: 15,
      },

      768: {
        items: 2,
        center: true,
        margin: 20,
      },

      992: {
        items: 3,
        center: true,
        margin: 25,
      },

      1200: {
        items: 4,
        center: true,
        margin: 150,
      },
      1920: {
        items: 4,
        center: true,
        margin: 150,
      },
    },
  });

  $(".owl-prev, .owl-next")
    .on("mouseenter", function () {
      owl.trigger("stop.owl.autoplay");
    })
    .on("mouseleave", function () {
      owl.trigger("play.owl.autoplay", [3000]);
    });

  $(".item-box .text.text-5 a")
    .on("mouseenter", function () {
      owl.trigger("stop.owl.autoplay");
    })
    .on("mouseleave", function () {
      owl.trigger("play.owl.autoplay", [3000]);
    });
});

//.................offer-countdown.............//

document.addEventListener("DOMContentLoaded", function () {
  const bannerSection = document.querySelector(".banner");
  const videoElement = document.querySelector(
    ".banner .banner-video .video-box video"
  );
  const bannerBlack = document.querySelector(
    ".banner .banner-video .banner-black"
  );
  const videoTop = document.querySelector(".banner-video > .video-top");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play();
          observer.unobserve(bannerSection);
        }
        setTimeout(function () {
          videoTop.style.opacity = "1";
          videoTop.style.zIndex = "5";
        }, 7000);
      });
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(bannerSection);
  videoElement.addEventListener("ended", function () {
    bannerBlack.style.transition = "top 1s ease-in-out";
    bannerBlack.style.top = "-100%";
  });
});

let input = document.querySelectorAll("input");

function clock() {
  const old = "30 April 2025 12:00 am";
  const oldDt = new Date(old);
  const newDt = new Date();
  let diff = (oldDt - newDt) / 1000;

  if (diff < 0) return;
  input[0].value = Math.floor(diff / 3600 / 24);
  input[1].value = Math.floor((diff / 3600) % 24);
  input[2].value = Math.floor((diff / 60) % 60);
  input[3].value = Math.floor(diff % 60);
}
clock();
setInterval(() => {
  clock();
}, 1000);

//.............free service move...........//

let serviceBox = document.querySelector(".free-service-box");
const freeService = document.querySelector(".free-services");
let count = 0;
let lastScrollY = window.scrollY;

const observer2 = new IntersectionObserver(
  (services) => {
    services.forEach((service) => {
      if (service.isIntersecting) {
        window.addEventListener("scroll", function () {
          if (window.scrollY > lastScrollY) {
            count += 0.3;
            serviceBox.style.transform = `translateX(${count}px)`;
          } else if (window.scrollY < lastScrollY) {
            count -= 0.3;
            serviceBox.style.transform = `translateX(${count}px)`;
          }
          lastScrollY = window.scrollY;
        });
      }
    });
  },
  {
    threshold: 0.5,
  }
);
observer2.observe(freeService);

//..............coupon slide..............//

$(document).ready(function () {
  var owl = $("#coupon-slider").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    dots: false,
    autoWidth: false,
    rewind: true,
    nav: false,
    responsiveClass: true,
    // responsive: {
    //   0: {
    //     items: 1,
    //     center: true,
    //     margin: 10,
    //   },

    //   576: {
    //     items: 1,
    //     center: true,
    //     margin: 15,
    //   },

    //   768: {
    //     items: 2,
    //     center: true,
    //     margin: 20,
    //   },

    //   992: {
    //     items: 3,
    //     center: true,
    //     margin: 25,
    //   },

    //   1200: {
    //     items: 4,
    //     center: true,
    //     margin: 30,
    //   },
    // },
  });
});

//.............special show up down move............//

// const specialShow = document.querySelector(".special-show");
// let backImg = document.querySelector(".back-top-img > img");
// let showMoveCount = 0;
// let showLastScrollY = window.scrollY;

// const observer3 = new IntersectionObserver(
//   (services) => {
//     services.forEach((service) => {
//       if (service.isIntersecting) {
//         window.addEventListener("scroll", function () {
//           if (window.scrollY > showLastScrollY) {
//             count += 0.1;
//             backImg.style.transform = `translateY(${count}px)`;
//           } else if (window.scrollY < showLastScrollY) {
//             count -= 0.1;
//             backImg.style.transform = `translateY(${count}px)`;
//           }
//           lastScrollY = window.scrollY;
//         });
//       }
//     });
//   },
//   {
//     threshold: 0.5,
//   }
// );
// observer3.observe(specialShow);

//.............special show description details size box..............//
let configTopP = document.querySelectorAll(".config-top > p");

let descriptionText = document.querySelector(".config-top > p:nth-child(1)");
let detailsText = document.querySelector(".config-top > p:nth-child(2)");
let SizeText = document.querySelector(".config-top > p:nth-child(3)");
const description = document.querySelector(".config-btm .description");
const details = document.querySelector(".config-btm .details");
const size = document.querySelector(".config-btm .size");

descriptionText.addEventListener("click", function () {
  description.style.display = "block";
  details.style.display = "none";
  size.style.display = "none";
});
detailsText.addEventListener("click", function () {
  description.style.display = "none";
  details.style.display = "block";
  size.style.display = "none";
});
SizeText.addEventListener("click", function () {
  description.style.display = "none";
  details.style.display = "none";
  size.style.display = "block";
});

configTopP.forEach((p) => {
  p.addEventListener("click", function () {
    configTopP.forEach((el) => el.classList.remove("active-config-top"));
    p.classList.add("active-config-top");
  });
});

//............number-counter.................//
const myNum = document.querySelectorAll(".count"); // Select all counters
const speed = 30; // Speed of the counter animation

// Function to animate the numbers
const animateNumber = (myCount) => {
  let target_count = +myCount.dataset.count;
  let init_count = +myCount.innerText;
  let increment = Math.floor(target_count / speed);
  const updateNumber = () => {
    init_count += increment;
    myCount.innerText = init_count;

    if (init_count < target_count) {
      setTimeout(updateNumber, 100);
    } else {
      myCount.innerText = target_count;
    }
  };

  updateNumber();
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll(".count"); // Get all counters in the observed section
        counters.forEach((counter) => animateNumber(counter)); // Animate each counter
        observer.unobserve(entry.target); // Stop observing once animation starts
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the section is visible
);

// Observe the section containing the counters
observer.observe(document.querySelector(".counter"));

//..............review slide.................//

$(document).ready(function () {
  var owl = $("#review-slider").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 40,
    autoplay: true,
    autoplayHoverPause: false,
    autoplayTimeout: 3000,
    dots: true,
    autoWidth: false,
    rewind: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        center: true,
        margin: 10,
      },
      576: {
        items: 1,
        center: true,
        margin: 15,
      },
      768: {
        items: 2,
        center: true,
        margin: 20,
      },
      992: {
        items: 3,
        center: true,
        margin: 25,
      },
      1200: {
        items: 3,
        center: true,
        margin: 0,
      },
      1920: {
        items: 3,
        center: true,
        margin: 40,
      },
    },
    onChanged: function (event) {
      // Reset background color and text color for all .cus-review-box
      $(".cus-review-box").css({
        "background-color": "transparent",
        color: "#fff", // Reset text color to white
      });

      // Change background color and text color for the centered .cus-review-box
      var centerItem = event.item.index;
      $(event.target)
        .find(".owl-item")
        .eq(centerItem)
        .find(".cus-review-box")
        .css({
          "background-color": "#C5194B",
        });
    },
  });
});

//....................scroll to top ................//

const btn = document.querySelector(".top-btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.style.opacity = "1";
    btn.style.display = "block";
  } else {
    btn.style.opacity = "0";
    btn.style.display = "none";
  }
});
btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
