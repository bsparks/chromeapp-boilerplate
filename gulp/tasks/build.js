'use strict';

let gulp = require('gulp'),
    Builder = require('jspm').Builder,
    builder = new Builder();

gulp.task('build:bundle', function() {
    return builder.bundle('chrome6', 'build/js/main.js');
});

gulp.task('build:copy', function() {
    return gulp.src('chrome/**/*')
        .pipe(gulp.dest('build/'));
});

gulp.task('build', ['build:bundle', 'build:copy']);