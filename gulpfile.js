var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  dalek = require('gulp-dalek'),
  uglify = require('gulp-uglify'),
  stripCode = require('gulp-strip-code'),
  rename = require('gulp-rename'),
  connect = require('gulp-connect');

var path = {
  func: 'test/functional/*.js',
  src: 'src/*.js',
  dist: 'dist/'
}

gulp.task('dalek', function() {
  return gulp.src(path.func)
    .pipe(dalek({
      browser: ['phantomjs', 'chrome'],
      reporter: ['html']
    }));
});

gulp.task('jshint', function() {
  return gulp.src(path.src)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
});

gulp.task('compress', function() {
  return gulp.src(path.src)
    .pipe(stripCode({
      start_comment: "test-code",
      end_comment: "end-test-code"
    }))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(path.dist));
});

gulp.task('watch', function() {
  connect.server({
    port: 8081
  });
  gulp.watch(path.src, ['jshint', 'dalek']);
});


gulp.task('default', ['jshint', 'compress']);
