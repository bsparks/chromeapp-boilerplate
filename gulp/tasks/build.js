'use strict';

let gulp = require('gulp'),
    jspm = require('jspm');

gulp.task('build:bundle', function() {
    return jspm.bundleSFX('src/main', 'build/js/main.js');
});

gulp.task('build:copy', ['build:copy:chrome', 'build:copy:assets']);

gulp.task('build:copy:assets', function() {
    return gulp.src(['assets/**/*'], {base: '.'})
        .pipe(gulp.dest('build/'));
});

gulp.task('build:copy:chrome', function() {
    return gulp.src(['chrome/**/*'])
        .pipe(gulp.dest('build/'));
});

gulp.task('build', ['build:bundle', 'build:copy']);