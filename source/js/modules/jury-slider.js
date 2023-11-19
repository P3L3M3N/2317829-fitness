import Swiper from '../vendor/swiper';

export const initJurySlider = () =>
  new Swiper('[data-jury-swiper]', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 40,
    navigation: {
      prevEl: '[data-jury-swiper-btn-prev]',
      nextEl: '[data-jury-swiper-btn-next]',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
