const _   = require('../plugin');
_.sass.compiler = require('sass');
const Fiber = require('fibers');
const dir = require('../dir');

//scssコンパイルタスク
const scss = () => {
    let objGulp = _.gulp.src(`${dir.src.scss}/**/*.scss`);
    if(process.env.DEV_MODE === 'true') {
        objGulp = objGulp.pipe(_.sourcemaps.init())
    }
    objGulp = objGulp
        .pipe(_.plumber({
            errorHandler: _.notify.onError({
                message: 'Error: <%= error.message %>',
                title: 'sass'
            })
        }))
        .pipe(_.sass({
            fiber: Fiber,
            outputStyle: 'compressed'
        }).on('error', _.sass.logError))
        .pipe(_.autoprefixer({
            cascade: false
        }))
    if(process.env.DEV_MODE === 'true') {
        objGulp = objGulp.pipe(_.sourcemaps.write())
    }
    objGulp = objGulp.pipe(_.gulp.dest(`${dir.dist.themes}${dir.dist.css}`));
    return objGulp;
};

module.exports = scss;
