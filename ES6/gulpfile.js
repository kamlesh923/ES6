var gulp = require('gulp');
var es6transpiler = require('es6-transpiler');

gulp.task('default', function(){
	return gulp.src('app/app.js')
			.pipe(es6transpiler())
			.pipe(gulp.dest('dist'))
})