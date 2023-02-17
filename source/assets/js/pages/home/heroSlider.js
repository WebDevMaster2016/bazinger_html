import Swiper, { Navigation, Pagination } from 'swiper';

export default (heroSliderSection) => {
  new Swiper(heroSliderSection, {
    modules: [Navigation, Pagination],
    pagination: {
      el: '.hero__pagination',
      bulletClass: 'hero__pagination-bullet',
      bulletActiveClass: 'is-active',
      clickable: true,
    },
    slidesPerView: 'auto',
    loop: false,
    preloadImages: false,
    lazy: true,
    navigation: {
      nextEl: '.js-hero-button-next',
      prevEl: '.js-hero-button-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
      },
    },
  });
};
