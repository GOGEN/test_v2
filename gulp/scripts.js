'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');
var webpack = require('webpack-stream');

var $ = require('gulp-load-plugins')();


function webpackWrapper(watch, test, callback) {
  var webpackOptions = {
    resolve: { extensions: ['', '.ts'] },
    watch: watch,
    module: {
      preLoaders: [{ test: /\.ts$/, loader: 'tslint-loader'},
                    { test: /\.styl$/, loader: 'stylint'}],
      loaders: [{ test: /\.ts$/, loaders: ['ng-annotate', 'awesome-typescript-loader']}]
    },
    output: { filename: 'index.js' }
  };

  if(watch) {
    webpackOptions.devtool = 'inline-source-map';
  }

  var webpackChangeHandler = function(err, stats) {
    $.util.log(stats.toString({
      colors: $.util.colors.supportsColor,
      chunks: false,
      hash: false,
      version: false
    }));
    browserSync.reload();
    if(watch) {
      watch = false;
      callback();
    }
  };

  var sources = [ path.join(conf.paths.src, 'scripts/index.ts') ];
  if (test) {
    sources.push(path.join(conf.paths.src, 'scripts/app/**/*.spec.ts'));
  }

  return gulp.src(sources)
    .pipe($.plumber())
    .pipe(webpack(webpackOptions, null, webpackChangeHandler))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/scripts')));
}

gulp.task('scripts', function () {
  return webpackWrapper(false, false);
});

gulp.task('scripts:watch', ['scripts'], function (callback) {
  return webpackWrapper(true, false, callback);
});

gulp.task('scripts:test', function () {
  return webpackWrapper(false, true);
});

gulp.task('scripts:test-watch', ['scripts'], function (callback) {
  return webpackWrapper(true, true, callback);
});
