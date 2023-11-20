export const initReviewSlider = (isLoop, breakpointSettings) => {
  const swiperWrapper = document.querySelector('[data-reviews-swiper]');
  const buttonPrev = document.querySelector('[data-reviews-swiper-btn-prev]');
  const buttonNext = document.querySelector('[data-reviews-swiper-btn-next]');

  return new window.Swiper(swiperWrapper, {
    loop: isLoop,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: breakpointSettings,
  });
};
