const gulp = require('gulp');
const pug = require('gulp-pug');
const del = require('del');
const browserSync = require('browser-sync').create();

//Styles
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const aoutoprefixer = require('gulp-autoprefixer');

//Images
const imagemin = require('gulp-imagemin');
const svgSprite = require('gulp-svg-sprites');

//scripts
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

//fonts



const paths = {
  root: './dist',
  templates: {
    pages: 'src/templates/pages/*.pug',
    src: 'src/templates/**/*.pug',
    dest: 'dist/',
  },
  styles: {
    src: 'src/styles/**/*.scss',
    dest: 'dist/styles/',
  },
  images: {
    src: 'src/images/**/*.*',
    dest: 'dist/images',
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'dist/js',
  },
  svgsprite: {
    src: 'src/images/svg/*.svg',
    dest: 'dist/images/sprites',
  },
  fonts: {
    src: 'src/fonts/*.{ttf,woff2}',
    dest: 'dist/fonts',
  }
};

//Pug
function templates(){
  return gulp.src(paths.templates.pages)
    .pipe(pug({ pretty: true}))
    .pipe(gulp.dest(paths.root));
}

function fonts(){
  return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest));
}

//Styles
function styles(){
  return gulp.src('./src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write())
    .pipe(aoutoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.styles.dest));
}

//Images
function images() {
  return gulp.src(paths.images.src)
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      optimizationLevel: 5,
      svgoPlugins: [{removeViewBox: true}],
    }))
    .pipe(gulp.dest(paths.images.dest));
}

//sprites
function svgsprite() {
  return gulp.src(paths.svgsprite.src)
    .pipe(svgSprite({
      svg: {
        sprite: 'sprite.svg',
      },
      baseSize: 16,
    }))
    .pipe(gulp.dest(paths.svgsprite.dest));
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
    server: paths.root,
  });
  browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

exports.templates = templates;
exports.styles = styles;
exports.del = del;
exports.images = images;
exports.svgsprite = svgsprite;
exports.scripts = scripts;

gulp.task('default', gulp.series(
  clean,
  gulp.parallel(
    styles,
    templates,
    scripts,
    images,
    svgsprite,
    fonts
  ),
  gulp.parallel(watch, server)
));

// gulp.task('build', gulp.series(
//   clean,
//   gulp.parallel(
//     styles,
//     templates,
//     scripts,
//     images,
//     svgsprite
//   )
// ));

