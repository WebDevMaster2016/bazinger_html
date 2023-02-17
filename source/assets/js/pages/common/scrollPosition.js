import debounce from '../../functions/debounce';

export default (sections, links, header) => {
  const headerHeight = header.getBoundingClientRect().height;

  window.addEventListener(
    'scroll',
    debounce(() => {
      let scrollPosition = window.scrollY + headerHeight;

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop - 2) {
          links.forEach((link) => {
            link.parentElement.classList.remove('is-active');
            if (
              section.getAttribute('id') ===
              link.getAttribute('href').substring(1)
            ) {
              link.parentElement.classList.add('is-active');
            }
          });
        }
      });
    }),
  );
};
