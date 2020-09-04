const _   = require('../plugin');
const dir = require('../dir');

const jsBuild = () => {
    let objGulp = _.gulp.src(`${dir.src.js}/**/*.js`);
    if(process.env.DEV_MODE === 'true') {
        objGulp = objGulp.pipe(_.sourcemaps.init())
    }
    objGulp = objGulp.pipe(_.plumber({
            errorHandler: _.notify.onError({
                message: 'Error: <%= error.message %>',
                title: 'jsBuild'
            })
        }))
        .pipe(_.uglify({
            output: {
                comments: 'some'
            }
        }))
        .pipe(_.rename((path) => {
            path.basename += '.min'
            path.extname = '.js'
        }));
    if(process.env.DEV_MODE === 'true') {
        objGulp = objGulp.pipe(_.sourcemaps.write())
    }
    objGulp = objGulp.pipe(_.gulp.dest(`${dir.dist.themes}${dir.dist.js}`));
    return objGulp;
};

module.exports = jsBuild;
