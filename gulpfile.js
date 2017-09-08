const gulp = require('gulp');
const pug = require('gulp-pug');
const del = require('del');
const browserSync = require('browser-sync').create();

//Styles
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

//scripts
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js')


const paths = {
    root: './dist',
    templates: {
        pages: 'src/templates/pages/*.pug',
        src: 'src/templates/**/*.pug',
        dest: 'dist/'
    },
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'dist/styles/'
    },
    images: {
        src: 'src/images/**/*.*',
        dest: 'dist/img'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'dist/js'
    }
}

//Pug
function templates(){
    return gulp.src(paths.templates.pages)
        .pipe(pug({ pretty: true}))
        .pipe(gulp.dest(paths.root));
}

//Styles
function styles(){
    return gulp.src('./src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.styles.dest))
}

//Images
function images() {
    return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
}

// Webpack
function scripts(){
    return gulp.src('src/scripts/main.js')
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.scripts.dest));
}

//Clean
function clean() {
    return del(paths.root);
}

//Слежка за проектом src
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.scripts.src, scripts);
}

//Слежка за dist и reload браузера
function server() {
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

exports.templates = templates;
exports.styles = styles;
exports.del = del;
exports.images = images;

gulp.task('default', gulp.series(
    gulp.parallel(styles, templates, scripts, images),
    gulp.parallel(watch, server)
));

gulp.task('build', gulp.series(
    clean,
    gulp.parallel(styles, templates, scripts, images)
));

