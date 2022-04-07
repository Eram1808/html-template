const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
var minify = require('gulp-minify-css');
var sassGlob = require('gulp-sass-glob');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('styles', () => {
    return gulp.src('src/sass/main*.scss', { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(minify())
        .pipe(sassGlob())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('js', done => {
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
    done();
});

gulp.task('clean', () => {
    return del([
        'dist/css/main.css',
        'dist/js/main.js'
    ]);
});


gulp.task('watch', () => {
    gulp.watch('src/sass/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});


gulp.task('default', gulp.series(['clean', 'styles', 'js']));