const { src, dest } = require('gulp');

// Кофигурации
const path = require('../config/path.js');

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const webpack = require('webpack-stream');

// Обработка JS
const js = () => {
  return src(path.js.src, { sourcemaps: true })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'JS',
          message: error.message,
        })),
      }),
    )
    .pipe(babel())
    .pipe(
      webpack({
        mode: 'development',
      }),
    )
    .pipe(uglify())
    .pipe(dest(path.js.dest, { sourcemaps: true }));
};

module.exports = js;
