const { series, watch } = require('gulp');
const browserSync       = require('browser-sync').create();
const dir               = require('../dir');
const imagemin          = require('./imagemin');
const jsBuild           = require('./js');
const sass              = require('./sass');
const dotenv            = require('dotenv').config();

//自動リロード
const browsersync = () => {
    browserSync.init({
        proxy: `${process.env.PROXY_HOST}:${process.env.PROXY_PORT}`
    });

    watch(
        `${dir.dist.themes}/**/*.php`
    )
        .on('add',    browserSync.reload)
        .on('change', browserSync.reload)
        .on('unlink', browserSync.reload);
    const sSass = series(sass, browserSync.reload);
    watch(
        `${dir.src.scss}/**/*.scss`
    )
        .on('add',    sSass)
        .on('change', sSass)
        .on('unlink', sSass);
    const sImagemin = series(imagemin, browserSync.reload);
    watch(
        `${dir.src.img}/**/*.+(jpg|jpeg|png|gif|svg)`
    )
        .on('add',    sImagemin)
        .on('change', sImagemin)
        .on('unlink', sImagemin);
    const sJs = series(jsBuild, browserSync.reload);
    watch(
        `${dir.src.js}/**/*.js`
    )
        .on('add',    sJs)
        .on('change', sJs)
        .on('unlink', sJs);
};

module.exports = browsersync;
