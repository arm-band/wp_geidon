const _         = require('../plugin');
const dir       = require('../dir');
const IMGDIR = { src: `${dir.src.img}/**/*.+(jpg|jpeg|png|gif|svg)`, dist: dir.dist.themes + dir.dist.img };

//画像圧縮
const imageminify = () => {
    return _.gulp.src(IMGDIR.src, {
            since: _.gulp.lastRun(imageminify)
        })
        .pipe(_.imagemin([
            _.imageminPng({
                quality: [.8, .9],
                speed: 1
            }),
            _.imageminJpeg({
                quality: 90
            }),
            _.imageminSvg(),
            _.imageminGif()
          ]))
        .pipe(_.gulp.dest(IMGDIR.dist));
};
//画像コピー(ファイルコピーのみ)
const imagecopy = () => {
    return _.gulp.src(IMGDIR.src)
        .pipe(_.plumber())
        .pipe(_.gulp.dest(IMGDIR.dist));
};

let imageProc = [];
if(process.env.IMAGE_MIN === 'true') {
    imageProc.push(imageminify);
}
else {
    imageProc.push(imagecopy);
}

//コールタスク
module.exports = _.gulp.parallel(imageProc);
