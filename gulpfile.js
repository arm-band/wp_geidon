/**
 * gulp task
 *
 * @author    アルム＝バンド
 * @copyright Copyright (c) アルム＝バンド
 */
/* require
*************************************** */
const { series, parallel } = require('gulp');
const browsersync          = require('./bin/tasks/browsersync');
const imagemin             = require('./bin/tasks/imagemin');
const jsBuild              = require('./bin/tasks/js');
const scssTask             = require('./bin/tasks/sass');

let taskArray = [scssTask, jsBuild, imagemin];

exports.server = browsersync;

//Scss
exports.scss = scssTask;
//js
exports.js = parallel(jsBuild);
//image
exports.imagemin = parallel(imagemin);

const taskBuild = parallel(taskArray);
exports.build = taskBuild;

//ビルドなし
exports.view = browsersync;
//gulpのデフォルトタスクで諸々を動かす
exports.default = series(taskBuild, browsersync);
