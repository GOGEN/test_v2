'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', ['scripts:watch', 'markups', 'inject'], function () {

  gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject-reload']);

  gulp.watch([
    path.join(conf.paths.src, '/styles/**/*.css'),
    path.join(conf.paths.src, '/styles/**/*.styl')
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('styles-reload');
    } else {
      gulp.start('inject-reload');
    }
  });


  gulp.watch(path.join(conf.paths.src, '/scripts/app/**/*.haml'), ['markups']);

  gulp.watch(path.join(conf.paths.src, '/scripts/app/**/*.html'), function(event) {
    browserSync.reload(event.path);
  });
});
