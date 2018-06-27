var gulp = require('gulp'),
	  mjml = require('gulp-mjml'),
	  imagemin = require('gulp-imagemin')
		browserSync = require('browser-sync');

gulp.task('mjml', function() {
  return gulp.src('templates/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('output/'))
})

gulp.task('imageOpt', function () {
	gulp.src('templates/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('output/img'))
})

gulp.task('watch',['browserSync'], function(){
  gulp.watch('templates/**/*.mjml', ['mjml'], browserSync.reload);
})

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'output/'
    },
  })
})

gulp.task('build', ['imageOpt', 'mjml'])

gulp.task('default', ['build', 'watch']);
