const _   = require('../plugin');
const dir = require('../dir');

//scssコンパイルタスク
const scss = () => {
    let objGulp = _.gulp.src(`${dir.src.scss}/**/*.scss`);
    if(process.env.DEV_MODE === 'true') {
        objGulp = objGulp.pipe(_.sourcemaps.init())
    }
    objGulp = objGulp
        .pipe(_.plumber())
        .pipe(_.sass({
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
