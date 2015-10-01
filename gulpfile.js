/* File: gulpfile.js */

// grab our packages
var gulp   = require('gulp')

// define the default task and add the watch task to it
gulp.task('default', ['build']);

// configure which files to watch and what tasks to use on file changes
gulp.task('build', function() {
  gulp.src('www/*.js').pipe(gulp.dest('dest'));
  });
