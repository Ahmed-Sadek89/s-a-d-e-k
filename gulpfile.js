const {task, src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const purgecss = require('gulp-purgecss');

task('sass', () => {
    return src('SCSS/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(prefix('last 4 versions'))
        .pipe(purgecss({content: ['*.html', 'javaScript/*.js', 'javaScript/**/*.js']}))
        .pipe(dest('css'))
});

task('watch', () => {
    watch(['SCSS/**/*.scss', '*.html', 'javaScript/*.js', 'javaScript/**/*.js'], series('sass'))
});

exports.default = series('watch')
