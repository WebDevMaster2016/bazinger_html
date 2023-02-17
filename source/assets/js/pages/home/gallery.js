import GLightbox from 'glightbox';

export default (elements) => {
  const myGallery = GLightbox({
    elements: [
      {
        href: `${window.front.imagesHome}gallery1.jpg`,
      },
      {
        href: `${window.front.imagesHome}gallery2.jpg`,
      },
      {
        href: `${window.front.imagesHome}gallery3.jpg`,
      },
      {
        href: `${window.front.imagesHome}gallery4.jpg`,
      },
    ],
    touchNavigation: true,
    keyboardNavigation: true,
  });

  if (elements.length > 0) {
    elements.forEach((element) => {
      element.addEventListener('click', () => {
        myGallery.openAt(+element.dataset.element - 1);
      });
    });
  }
};
