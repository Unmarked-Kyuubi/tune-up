import "./main-psd.es.async.js";
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
    -cardsThatFitTestimonial
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
