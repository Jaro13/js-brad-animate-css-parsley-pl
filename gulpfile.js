const gulp = require('gulp');

const imagemin = require('gulp-imagemin');

const uglify = require('gulp-uglify');

const sass = require('gulp-sass');

const concat = require('gulp-concat');

//gulp message

gulp.task('message', function () {

    return (console.log('Gulp is running ...'));

});




//copy all html

gulp.task('copyHtml', function () {

    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));

});


//optimize images

gulp.task('imageMin', () =>
    gulp.src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);


//js uglify

/*

gulp.task('minify', function () {

    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));

});

*/

//sass

gulp.task('sass', function () {

    gulp.src('src/sass/*.scss')

        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))


});

//concat

gulp.task('scripts', function () {
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));


});






//gulp

gulp.task('default', ['message', 'copyHtml', 'imageMin', 'sass', 'scripts']);

//watch

gulp.task('watch', function () {

    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/*.html', ['copyHtml']);

});