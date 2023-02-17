export default (header) => {
  let scrollPos = window.scrollY;
  const headerAddClass = () => {
    header.classList.add('is-scrolled');
  };
  const headerRemoveClass = () => {
    header.classList.remove('is-scrolled');
  };

  window.addEventListener('scroll', function () {
    scrollPos = window.scrollY;

    if (scrollPos >= 1) {
      headerAddClass();
    } else {
      headerRemoveClass();
    }
  });
};
