import replace from 'gulp-replace'; //поиск и замена
import plumber from 'gulp-plumber'; //обработка ошибок
import notify from 'gulp-notify'; //Сообщения (подсказки)
import browsersync from 'browser-sync'; //Локальный сервер

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
};
