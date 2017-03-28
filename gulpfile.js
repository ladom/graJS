
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');

gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server: "./"
	});

	gulp.watch("sass/*.sass", ['sass']);
	gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
	return gulp.src("sass/style.sass")
		.pipe(sass({
			outputStyle: 'expanded'
		})
		)
		.pipe(autoprefixer({
			browsers: ["> 5%"]
		})
		)
		.pipe(gulp.dest("css/"))
		.pipe(browserSync.stream());
});

gulp.task('default', ['serve']);