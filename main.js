// Carousel
const carousel = document.querySelector('.custom-carousel');
const carouselWidth = carousel.scrollWidth;
const leftBtn = document.querySelector('.custom-carousel__left-btn');
const rightBtn = document.querySelector('.custom-carousel__right-btn');
const link = document.querySelector('.custom-carousel__show-more');

function updateControls(currScrollLeft) {
  currScrollLeft === 0 ? leftBtn.classList.add('d-none') : leftBtn.classList.remove('d-none');
  Math.round(currScrollLeft + carousel.clientWidth) >= carouselWidth ? rightBtn.classList.add('d-none') : rightBtn.classList.remove('d-none');

  leftBtn.style.left = `${currScrollLeft}px`;
  rightBtn.style.right = `-${currScrollLeft}px`;
  link.style.right = `-${currScrollLeft}px`;
}

function clampScrollLeft(scrollLeft) {
  const currScrollLeft = Math.min(scrollLeft, carouselWidth - carousel.clientWidth);
  return currScrollLeft;
}

window.addEventListener('resize', () => {
  const currScrollLeft = clampScrollLeft(carousel.scrollLeft);
  updateControls(currScrollLeft);
});

carousel.addEventListener('scroll', () => {
  const currScrollLeft = clampScrollLeft(carousel.scrollLeft);
  updateControls(currScrollLeft);
});

leftBtn.addEventListener('click', () => {
  const currScrollLeft = Math.max(carousel.scrollLeft - carousel.clientWidth, 0);
  carousel.scrollLeft = currScrollLeft;
  updateControls(currScrollLeft);
});

rightBtn.addEventListener('click', () => {
  const currScrollLeft = clampScrollLeft(carousel.scrollLeft + carousel.clientWidth);
  carousel.scrollLeft = currScrollLeft;
  updateControls(currScrollLeft);
});