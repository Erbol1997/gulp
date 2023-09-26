const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

// Кофигурации
const path = require('./config/path.js');

// Задачи
const html = require('./task/html.js');
const scss = require('./task/scss.js');
const js = require('./task/js.js');
const img = require('./task/img.js');
const clear = require('./task/clear.js');

// Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

// Наблюдение
const watcher = () => {
  watch(path.html.watch, html).on('all', browserSync.reload);
  watch(path.scss.watch, scss).on('all', browserSync.reload);
  watch(path.js.watch, js).on('all', browserSync.reload);
  watch(path.img.watch, img).on('all', browserSync.reload);
};

exports.clear = clear;
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;

// Сборка
exports.dev = series(clear, parallel(html, scss, js, img), parallel(watcher, server));
