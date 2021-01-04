const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const prefix = require('gulp-autoprefixer');
const plumber = require('gulp-plumber')


gulp.task('sass', function () {
    return gulp.src('public/sass/**/main.scss')
        .pipe(plumber([{ errorHandler: false }]))
        .pipe(sass())
        .pipe(prefix())
        .pipe(gulp.dest('./public/css/'))
        .pipe(browserSync.stream())
});

gulp.task('serve', gulp.series('sass', function () {

    browserSync.init({
        server: './'
    });

    gulp.watch('./public/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('./*.html').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));