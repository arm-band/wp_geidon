const _        = require('../plugin');
const dir      = require('../dir');
const imagemin = require('./imagemin');
const jsBuild  = require('./js');
const scss     = require('./sass');

//自動リロード
const browsersync = () => {
    _.browserSync.init({
            proxy: `${process.env.PROXY_HOST}:${process.env.PROXY_PORT}`
        });

        _.gulp.watch(
            `${dir.dist.themes}/**/*.php`
        )
        .on('add',    _.browserSync.reload)
        .on('change', _.browserSync.reload)
        .on('unlink', _.browserSync.reload);
    const sSass = _.gulp.series(scss, _.browserSync.reload);
    _.gulp.watch(
        `${dir.src.scss}/**/*.scss`
    )
        .on('add',    sSass)
        .on('change', sSass)
        .on('unlink', sSass);
    const sImagemin = _.gulp.series(imagemin, _.browserSync.reload);
    _.gulp.watch(
        `${dir.src.img}/**/*.+(jpg|jpeg|png|gif|svg)`
    )
        .on('add',    sImagemin)
        .on('change', sImagemin)
        .on('unlink', sImagemin);
    const sJs = _.gulp.series(jsBuild, _.browserSync.reload);
    _.gulp.watch(
        `${dir.src.js}/**/*.js`,
        {
            ignored: `${dir.src.js}/concat/**`
        }
    )
        .on('add',    sJs)
        .on('change', sJs)
        .on('unlink', sJs);
};

module.exports = browsersync;
