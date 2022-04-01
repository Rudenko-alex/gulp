//основной модуль
import gulp from 'gulp';
//Импорт путей
import { path } from './gulp/config/path.js';
// импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';

//Передаем значения в глобальную переменную
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};

// импорт задач
import { copy } from './gulp/tasks/copy.js';

//Удаление файлов
import { reset } from './gulp/tasks/reset.js';

//Копирование html файлов
import { html } from './gulp/tasks/html.js';

//включение сервера
import { server } from './gulp/tasks/server.js';

//Подключение обработки scss
import { scss } from './gulp/tasks/scss.js';

//копирование img
import { images } from './gulp/tasks/images.js';

import { js } from './gulp/tasks/js.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';

//наблюдатель
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.js, js);
}
// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//Основные задачи
const mainTasks = gulp.series(
  fonts,
  gulp.parallel(copy, html, scss, images, js)
);

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Выполнение сценария по умолчанию
gulp.task('default', dev);
