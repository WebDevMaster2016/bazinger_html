/*---=== import modules ===---*/

// local modules
import { qS, qSA } from '../functions/selectElement';
import lazyLoading from '../pages/common/lazyLoading';
import headerScroll from '../pages/common/headerScroll';
import hamburgerToggle from '../pages/common/hamburgerToggle';
import scrollIntoView from '../pages/common/scrollIntoView.js';
import scrollPosition from '../pages/common/scrollPosition.js';

/*---=== /import modules ===---*/

/*---=== declare variables ===---*/

const arrImages = qSA('.js-lazy');
const hamburger = qS('.js-hamburger');
const body = qS('body');
const mainHeader = qS('.js-header');
const mainHeaderNav = qS('.js-header-nav');
const navLinks = qSA('.js-nav-link');
const sections = qSA('.js-section');

/*---=== /declare variables ===---*/

/*---=== run modules ===---*/

document.addEventListener('DOMContentLoaded', () => {
  // call lazy loading module
  if (arrImages.length > 0) {
    lazyLoading(arrImages);
  }

  // call header scroll module
  if (mainHeader !== null) {
    headerScroll(mainHeader);
  }

  // call hamburger menu show/hide module
  if (hamburger !== null) {
    hamburgerToggle(hamburger, body, mainHeaderNav);
  }

  // call scrollIntoView module
  if (navLinks.length > 0) {
    scrollIntoView(navLinks);
  }

  // call scrollPosition module
  if (sections.length > 0) {
    scrollPosition(sections, navLinks, mainHeader);
  }
});

/*---=== /run modules ===---*/
