module.exports = {
    browserSync: require('browser-sync').create(),
    dotenv: require('dotenv').config(),
    fs: require('fs'),
    gulp:  require('gulp'),
    plumber: require('gulp-plumber'),
    notify: require('gulp-notify'),
    sass:  require('gulp-sass'),
    autoprefixer: require('gulp-autoprefixer'),
    imagemin: require('gulp-imagemin'),
    imageminJpeg: require('imagemin-mozjpeg'),
    imageminPng: require('imagemin-pngquant'),
    imageminGif: require('imagemin-gifsicle'),
    imageminSvg: require('imagemin-svgo'),
    rename: require('gulp-rename'),
    uglify: require('gulp-uglify-es').default,
    sourcemaps: require('gulp-sourcemaps')
};
