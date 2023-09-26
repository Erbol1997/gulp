const { src, dest } = require('gulp');

// Кофигурации
const path = require('../config/path.js');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

// Обработка IMG
const img = () => {
  return src(path.img.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'IMG',
          message: error.message,
        })),
      }),
    )
    .pipe(dest(path.img.dest));
};

module.exports = img;
