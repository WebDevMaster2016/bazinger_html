import pkg from 'gulp';
const { src, dest } = pkg;
import pump from 'pump';
import plumber from 'gulp-plumber';
import fileinclude from 'gulp-file-include';
import notify from 'gulp-notify';

export default function html(inputHtml, basepath, outputHtml, cb) {
  return pump(
    [
      src(inputHtml),
      plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }),
      fileinclude({
        prefix: '@@',
        basepath: basepath,
        context: {
          minWidthDesktop: '(min-width:1170px)',
          minWidthLaptop: '(min-width:1024px)',
          minWidthTablet: '(min-width:768px)',
          maxWidth: '(max-width:767px)',
          minWidth: '(min-width:768px)',
          image_preload:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII=',
          sprites_home__: `/assets/images/sprites/home/svg/symbols.svg#icon-`,
          images_common__: 'assets/images/common/',
          images_home__: 'assets/images/pages/home/',
          fonts_lato__: 'assets/fonts/lato/',
          fonts_droidsans__: 'assets/fonts/droidsans/',
        },
      }),
      dest(outputHtml),
    ],
    cb,
  );
}
