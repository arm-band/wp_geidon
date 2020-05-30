const _        = require('../plugin');
const dir      = require('../dir');
const imagemin = require('./imagemin');
const jsBuild  = require('./js');
const scss     = require('./sass');

//自動リロード
const browsersync = () => {
        _.browserSync({
            proxy: 'localhost:8889'
        });

    _.watch([`${dir.dist.themes}/**/*.php`], _.gulp.series(_.browserSync.reload));
    _.watch([`${dir.src.scss}/**/*.scss`, `!${dir.src.scss}/util/_var.scss`], _.gulp.series(scss, _.browserSync.reload));
    _.watch(`${dir.src.img}/**/*.+(jpg|jpeg|png|gif|svg)`, _.gulp.series(imagemin, _.browserSync.reload));
    _.watch([`${dir.src.js}/**/*.js`, `!${dir.src.js}/concat/**/*.js`], _.gulp.series(jsBuild, _.browserSync.reload));
};

module.exports = browsersync;
