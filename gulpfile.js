var gulp = require('gulp');
var rename = require('gulp-rename');
//Sass
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var cleanCSS = require('gulp-clean-css');
//JavaScript
var concat =require('gulp-concat');
var jsmin = require('gulp-jsmin');
//JavaScript
gulp.task('script',function () {
    gulp.src('SpringDay/js/right/*.js')
        .pipe(concat('springDay_rtl.js'))
        .pipe(gulp.dest('Desc/js'));
    gulp.src('SpringDay/js/left/*.js')
        .pipe(concat('springDay_ltr.js'))
        .pipe(gulp.dest('Desc/js'));

});

//Sass Task
gulp.task('sass',function () {
    gulp.src('SpringDay/sass/right/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('Desc/css/'));
    gulp.src('SpringDay/sass/left/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('Desc/css/'));

});

//Minify
gulp.task('minify',function () {
 gulp.src('Desc/js/*.js')
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('Desc/js'));
    gulp.src('Desc/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('Desc/css'));
});
