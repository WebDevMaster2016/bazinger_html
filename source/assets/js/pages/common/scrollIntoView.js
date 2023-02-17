export default function scrollIntoView(navLinks) {
  const hamburger = document.querySelector('.js-hamburger');
  const hamburgerNav = document.querySelector('.js-header-nav');
  const hideMobileNav = () => {
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburgerNav.classList.remove('is-opened');
    document.body.classList.remove('disabled-scroll');
  };

  navLinks.forEach((elem, index, arr) => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      arr.forEach((elem) => {
        elem.parentElement.classList.remove('is-active');
      });
      elem.parentElement.classList.add('is-active');
      let targetHref = document.querySelector(
        `${event.target.getAttribute('href')}`,
      );
      if (hamburger.classList.contains('is-active')) {
        hideMobileNav();
      }
      if (targetHref != null) {
        targetHref.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      }
    });
  });
}
