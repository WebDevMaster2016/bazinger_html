/*---=== import modules ===---*/

// local modules
import { qS, qSA } from '../functions/selectElement.js';
import hero from '../pages/home/heroSlider.js';
import gallery from '../pages/home/gallery.js';
import video from '../pages/home/video.js';

/*---=== /import modules ===---*/

/*---=== declare variables ===---*/

const heroSlider = qS('.js-hero-slider');
const galleryList = qS('.js-gallery-list');
const imageElements = qSA('.js-gallery-trigger');
const videoSection = qS('.js-video');
const videoButton = qS('.js-video-play');

/*---=== /declare variables ===---*/

/*---=== run modules ===---*/

document.addEventListener('DOMContentLoaded', () => {
  // init hero slider
  if (heroSlider !== null) {
    hero(heroSlider);
  }

  // init gallery
  if (galleryList !== null) {
    gallery(imageElements);
  }

  // init video
  if (videoSection !== null) {
    video(videoButton);
  }
});

/*---=== /run modules ===---*/
