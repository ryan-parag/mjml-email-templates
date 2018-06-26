var gulp = require('gulp'),
  mjml = require('gulp-mjml'),
  imagemin = require('gulp-imagemin')
browserSync = require('browser-sync');

gulp.task('mjml', function() {
  return gulp.src('templates/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('output/'))
})

gulp.task('images', () =>
  gulp.src('templates/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('output/img'))
);

gulp.task('watch', function() {
  gulp.watch('templates/**/*.mjml', ['mjml']);
});

gulp.task('browser-sync', ['mjml'], function() {
  browserSync({
    server: {
      baseDir: 'output/'
    },
    notify: false
  });
});

gulp.task('default', ['mjml', 'browser-sync', 'watch', 'images']);
