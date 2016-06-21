import gulp from 'gulp';
import {spawnSync} from 'child_process';
import del from 'del';
import stylelint from 'gulp-stylelint';
import eslint from 'gulp-eslint';
import babel from 'gulp-babel';
import webpackStream from 'webpack-stream';
import webpackConfig from './webpack.config';
import exampleWebpackConfig from './example/webpack.config';
import webpack from 'webpack';
import sass from 'gulp-sass';
import filter from 'gulp-filter';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import concat from 'gulp-concat';
import pkg from './package.json';
import runSequence from 'run-sequence';

gulp.task('start', (callback) => {
  let start = spawnSync('babel-node', ['example/webpack.server.js'], {stdio: 'inherit'});
  if (start.stderr) {
    callback(start.stderr);
  }
});

gulp.task('build:lib:clean', () => {
  del.sync(['lib', 'dist']);
});

gulp.task('build:lib:stylelint', () => {
  return gulp
    .src(['src/**/*.{css,scss,sass}'])
    .pipe(stylelint({
      failAfterError: true,
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});

gulp.task('build:lib:eslint', () => {
  return gulp
    .src(['src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('build:lib:babel', () => {
  return gulp
    .src(['src/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('lib'));
});

gulp.task('build:lib:umd', () => {
  return gulp
    .src(['src/index.js'])
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('dist'));
});

gulp.task('build:lib:sass', () => {
  let cssFilter = filter('**/*.css');
  return gulp
    .src(['src/**/*.scss', '!src/**/_*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(cssFilter)
    .pipe(gulp.dest('lib'))
    .pipe(concat(pkg.name + '.css'))
    .pipe(postcss([
      autoprefixer({
        browsers: [
          'ie >= 10',
          'ie_mob >= 10',
          'ff >= 30',
          'chrome >= 34',
          'safari >= 7',
          'opera >= 23',
          'ios >= 7',
          'android >= 4.4',
          'bb >= 10'
        ]
      }),
      cssnano({
        safe: true,
        discardComments: {removeAll: true}
      })
    ]))
    .pipe(gulp.dest('dist'));
});

gulp.task('build:lib:copy', () => {
  return gulp
    .src(['src/**/*', '!src/**/*.{scss,js}'])
    .pipe(gulp.dest('lib'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build:lib', (callback) => {
  runSequence(
    'build:lib:clean',
    'build:lib:stylelint',
    'build:lib:eslint',
    'build:lib:babel',
    'build:lib:umd',
    'build:lib:sass',
    'build:lib:copy',
    callback
  );
});

gulp.task('build:example:clean', () => {
  del.sync(['example/dist']);
});

gulp.task('build:example:webpack', () => {
  return gulp
    .src(['example/app/app.js'])
    .pipe(webpackStream(exampleWebpackConfig, webpack))
    .pipe(gulp.dest('example/dist'));
});

gulp.task('build:example:copy', () => {
  return gulp
    .src(['example/app/*', '!example/app/*.{html,js}'], {nodir: true})
    .pipe(gulp.dest('example/dist'));
});

gulp.task('build:example', (callback) => {
  runSequence(
    'build:example:clean',
    'build:example:webpack',
    'build:example:copy',
    callback
  );
});

gulp.task('build', (callback) => {
  runSequence('build:lib', 'build:example', callback);
});

gulp.task('default', ['build']);
