(() => {
  // Carousel
  const carousel = document.querySelector('.custom-carousel');
  const leftBtn = document.querySelector('.custom-carousel__left-btn');
  const rightBtn = document.querySelector('.custom-carousel__right-btn');

  function updateControls() {
    carousel.scrollLeft === 0 ? leftBtn.classList.add('d-none') : leftBtn.classList.remove('d-none');
    Math.ceil(carousel.scrollLeft + carousel.clientWidth + 0.5) >= carousel.scrollWidth ? rightBtn.classList.add('d-none') : rightBtn.classList.remove('d-none');
  }

  window.addEventListener('resize', () => {
    updateControls();
  });

  carousel.addEventListener('scroll', () => {
    updateControls();
  });

  leftBtn.addEventListener('click', () => {
    carousel.scrollLeft -= carousel.clientWidth;
    updateControls();
  });

  rightBtn.addEventListener('click', () => {
    carousel.scrollLeft += carousel.clientWidth;
    updateControls();
  });

  // 'Lo más de Marca' section
  const mostPopularNewsButton = document.querySelector('.lo-mas-news__popular');
  const latestNewsButton = document.querySelector('.lo-mas-news__latest');
  const mostPopularNews = document.querySelector('.lo-mas-news__popular-news');
  const latestNews = document.querySelector('.lo-mas-news__latest-news');

  mostPopularNewsButton.addEventListener('click', e => {
    mostPopularNewsButton.classList.add('active');
    mostPopularNews.classList.remove('d-none');
    latestNewsButton.classList.remove('active');
    latestNews.classList.add('d-none');
  });

  latestNewsButton.addEventListener('click', e => {
    latestNewsButton.classList.add('active');
    latestNews.classList.remove('d-none');
    mostPopularNewsButton.classList.remove('active');
    mostPopularNews.classList.add('d-none');
  });
})();