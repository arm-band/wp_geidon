/**
 * gulp task
 *
 * @author    アルム＝バンド
 * @copyright Copyright (c) アルム＝バンド
 */
/* require
*************************************** */
const _         = require('./bin/plugin');
const dir       = require('./bin/dir');
const browsersync = require('./bin/tasks/browsersync');
const imagemin = require('./bin/tasks/imagemin');
const jsBuild = require('./bin/tasks/js');
const scss = require('./bin/tasks/sass');

let taskArray = [scss, jsBuild, imagemin];

//view
const taskServer = _.gulp.series(browsersync);
exports.server = taskServer;

//build
const taskBuild = _.gulp.parallel(taskArray);
exports.build = taskBuild;

//default
exports.default = _.gulp.series(taskBuild, taskServer);
