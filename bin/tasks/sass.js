const { src, dest } = require('gulp');
const plumber       = require('gulp-plumber');
const notify        = require('gulp-notify');
const sass          = require('gulp-sass')(require('sass'));
const autoprefixer  = require('gulp-autoprefixer');
const sourcemaps    = require('gulp-sourcemaps');
const dir           = require('../dir');
const dotenv        = require('dotenv').config();

//scssコンパイルタスク
const scss = () => {
    let objGulp = src(
        `${dir.src.scss}/**/*.scss`
    );
    if(process.env.DEV_MODE === 'dev') {
        objGulp = objGulp.pipe(sourcemaps.init());
    }
    objGulp = objGulp
        .pipe(plumber({
            errorHandler: notify.onError({
                message: 'Error: <%= error.message %>',
                title: 'sass'
            })
        }))
        .pipe(sass({
            outputStyle: 'compressed',
            quietDeps: true
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }));
        if(process.env.DEV_MODE === 'dev') {
            objGulp = objGulp.pipe(sourcemaps.write())
        }
        objGulp = objGulp.pipe(dest(`${dir.dist.themes}${dir.dist.css}`));
        return objGulp;
};

module.exports = scss;
