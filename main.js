// Carousel
const carousel = document.querySelector('.custom-carousel');
const leftBtn = document.querySelector('.custom-carousel__left-btn');
const rightBtn = document.querySelector('.custom-carousel__right-btn');
const link = document.querySelector('.custom-carousel__show-more');

function updateControls(currScrollLeft) {
  currScrollLeft === 0 ? leftBtn.classList.add('d-none') : leftBtn.classList.remove('d-none');
  currScrollLeft + carousel.clientWidth >= carousel.scrollWidth ? rightBtn.classList.add('d-none') : rightBtn.classList.remove('d-none');

  leftBtn.style.left = `${currScrollLeft}px`;
  rightBtn.style.right = `-${currScrollLeft}px`;
  link.style.right = `-${currScrollLeft}px`;
}

window.addEventListener('resize', () => {
  updateControls(carousel.scrollLeft);
});

carousel.addEventListener('scroll', () => {
  updateControls(carousel.scrollLeft);
});

leftBtn.addEventListener('click', () => {
  const currScrollLeft = Math.max(carousel.scrollLeft - carousel.clientWidth, 0);
  carousel.scrollLeft = currScrollLeft;
  updateControls(currScrollLeft);
});

rightBtn.addEventListener('click', () => {
  const currScrollLeft = Math.min(carousel.scrollLeft + carousel.clientWidth, carousel.scrollWidth - carousel.clientWidth);
  carousel.scrollLeft = currScrollLeft;
  updateControls(currScrollLeft);
});