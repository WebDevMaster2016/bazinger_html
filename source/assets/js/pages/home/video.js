import GLightbox from 'glightbox';

export default (button) => {
  const myGallery = GLightbox({
    elements: [
      {
        href: 'https://www.youtube.com/watch?v=ux6zXguiqxM',
        type: 'video',
        source: 'youtube',
      },
    ],
    touchNavigation: true,
    keyboardNavigation: true,
    autoplayVideos: false,
  });

  if (button) {
    button.addEventListener('click', () => {
      myGallery.open();
    });
  }
};
