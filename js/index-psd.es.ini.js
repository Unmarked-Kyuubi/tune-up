import "./main-psd.es.async.js";
document.querySelector(".hero__carousel");
const slideshowImg = document.querySelectorAll(".hero__carousel-img");
let currentIndex = 0;
slideshowImg.forEach((img) => {
  img.addEventListener("animationend", () => {
    const arrayLast = slideshowImg.length - 1;
    slideshowImg[currentIndex].classList.remove("hero__carousel-img--active");
    if (currentIndex === arrayLast) {
      currentIndex = 0;
    }
    currentIndex += 1;
    slideshowImg[currentIndex].classList.add("hero__carousel-img--active");
  });
});
slideshowImg[currentIndex].classList.add("hero__carousel-img--active");
document.querySelector(".services__card-arrow-left");
document.querySelector(".services__card-arrow-right");
const serviceSlides = document.querySelectorAll(".services__card");
[...serviceSlides];
const serviceSlideWidth = document.querySelector(".services__card").offsetWidth;
const serviceSlidesContainer = document.querySelector(
  ".services__card-container"
);
const serviceArrow = document.querySelectorAll(".services__card-arrow");
let isDragged = false;
let initialX;
let carouselPosition;
console.log(`Offset width is ${serviceSlideWidth}`);
console.log(`Total width is ${serviceSlidesContainer.offsetWidth}`);
const cardsThatFit = Math.round(
  serviceSlidesContainer.offsetWidth / serviceSlideWidth
);
console.log(
  `SPread operrator is ${[...serviceSlidesContainer.children].slice(
    -cardsThatFit
  )}`
);
console.log(`Query Sleceot is ${cardsThatFit}`);
serviceArrow.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    console.log(arrow.dataset.serviceArrow);
    serviceSlidesContainer.scrollLeft += arrow.dataset.serviceArrow === "left" ? -serviceSlideWidth : serviceSlideWidth;
  });
});
serviceSlidesContainer.addEventListener("mousedown", (event) => {
  isDragged = true;
  initialX = event.pageX;
  carouselPosition = serviceSlidesContainer.scrollLeft;
  console.log("THE MOUSE HAS BEEN CLICKED DOWN COMMENCE DRAGGING");
  serviceSlidesContainer.classList.add("services__card-container--dragging");
});
serviceSlidesContainer.addEventListener("mousemove", (event) => {
  const finalX = event.pageX;
  if (isDragged && Math.abs(finalX - initialX) > 4) {
    serviceSlidesContainer.scrollLeft = carouselPosition - (finalX - initialX);
    console.log("Dragging currently");
  }
});
document.addEventListener("mouseup", () => {
  isDragged = false;
  console.log("Dragging stopped");
  serviceSlidesContainer.classList.remove("services__card-container--dragging");
});
serviceSlides.forEach((slide, index) => {
  slide.addEventListener("mousedown", (event) => {
    console.log(isDragged);
    if (isDragged) {
      console.log("Sorry, dragging in progress. Can't follow the link.");
    }
    console.log("Dragging done. Can follow the link.");
  });
  slide.addEventListener("mousemove", (event) => {
    const finalX = event.pageX;
    if (isDragged && Math.abs(initialX - finalX) > 4) {
      serviceSlidesContainer.scrollLeft = carouselPosition - (finalX - initialX);
      serviceSlides[index].classList.add("service__card--disabled");
      console.log("Sorry, dragging in progress. Can't follow the link.");
    }
  });
  document.addEventListener("mouseup", (event) => {
    serviceSlides[index].classList.remove("service__card--disabled");
    setTimeout(() => {
      serviceSlides[index].classList.remove("service__card--disabled");
    }, 100);
    console.log("Dragging done. Can follow the link.");
  });
});
const testimonialContainer = document.querySelector(
  ".testimonial__card-container"
);
const testimonialCards = document.querySelectorAll(".testimonial__card");
const testimonialArrows = document.querySelectorAll(".testimonial__card-arrow");
const testimonialCardWidth = document.querySelector(".testimonial__card").offsetWidth;
[...testimonialCards];
const cardsThatFitTestimonial = testimonialContainer.offsetWidth / testimonialCardWidth;
let testimonialDragged = false;
let testimonialInitialX;
let testimonialInitialCarousel;
console.log(`Offset width  = ${testimonialCardWidth}`);
console.log(`Total width  = ${testimonialContainer.offsetWidth}`);
console.log(`Total width  = ${cardsThatFitTestimonial}`);
console.log(
  `SPread operrator is ${[...testimonialContainer.children].slice(
    -cardsThatFit
  )}`
);
console.log(`Query Sleceot is ${[...testimonialCards]}`);
testimonialArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    testimonialContainer.scrollLeft += arrow.dataset.testimonialArrow === "left" ? -testimonialCardWidth : testimonialCardWidth;
  });
});
testimonialContainer.addEventListener("mousedown", (event) => {
  testimonialInitialX = event.pageX;
  testimonialInitialCarousel = testimonialContainer.scrollLeft;
  testimonialDragged = true;
  testimonialContainer.classList.add("testimonial__card-container--dragging");
});
testimonialContainer.addEventListener("mousemove", (event) => {
  if (testimonialDragged) {
    testimonialContainer.scrollLeft = testimonialInitialCarousel - (event.pageX - testimonialInitialX);
  }
});
document.addEventListener("mouseup", () => {
  testimonialDragged = false;
  testimonialContainer.classList.remove("testimonial__card-container--dragging");
});
const blogPost = document.querySelectorAll(".blog__side-story-card");
const blogText = document.querySelector(".blog__card-title");
const blogDate = document.querySelector(".blog__card-info-date");
const blogImg = document.querySelector(".blog__card-img");
let activeIndex = 0;
if (!(window.innerWidth < 800)) {
  blogPost.forEach((post, index) => {
    post.addEventListener("mouseover", () => {
      activeIndex = index;
      blogPost.forEach((p, i) => {
        if (i !== activeIndex) {
          p.classList.remove("blog__side-story-card--active");
        }
      });
      const posts = blogPost[activeIndex];
      if (posts.dataset.sidestory === "one") {
        blogImg.src = "../assets/article-car-shape-psd.asset.jpg";
      } else if (posts.dataset.sidestory === "two") {
        blogImg.src = "../assets/article-paint-psd.asset.jpg";
      } else if (posts.dataset.sidestory === "three") {
        blogImg.src = "../assets/article-fuel-sat-psd.asset.jpg";
      } else if (posts.dataset.sidestory === "four") {
        blogImg.src = "../assets/article-used-cars-psd.asset.jpg";
      }
      blogText.textContent = posts.querySelector(
        ".blog__side-story-card-title"
      ).textContent;
      blogDate.textContent = posts.querySelector(
        ".blog__side-story-card-date"
      ).textContent;
      posts.classList.add("blog__side-story-card--active");
    });
  });
}
