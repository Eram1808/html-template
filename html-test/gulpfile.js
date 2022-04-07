const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
var minify = require('gulp-minify-css');
const minifyall = require("gulp-minify");
var sassGlob = require('gulp-sass-glob');
//const globImporter = require('node-sass-glob-importer');
const browsersync = require('browser-sync').create();

gulp.task('styles', () => {
    return gulp.src('src/sass/main*.scss', { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(minify())
        .pipe(sassGlob())
        .pipe(gulp.dest('dist/css/'));
});

function minifyjs() {

    return gulp.src('src/js/main.js', { allowEmpty: true })
        .pipe(minifyall({ noSource: true }))
        .pipe(gulp.dest('dist/js'))
}

gulp.task('clean', () => {
    return del([
        'dist/css/main.css',
        'dist/js/main-min.js'
    ]);
});

// Browsersync Tasks
function browsersyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
}

function browsersyncReload(cb) {
    browsersync.reload();
    cb();
}

gulp.task('watch', () => {
    gulp.watch('src/sass/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
    gulp.watch('*.html', browsersyncReload);
    gulp.watch(['src/scss/**/*.scss', 'src/js/**/*.js'], series(browsersyncReload));
});



exports.default = minifyjs;
gulp.task('default', gulp.series(['clean', 'styles']));
// Default Gulp task
exports.default = gulp.series(
    browsersyncServe
);