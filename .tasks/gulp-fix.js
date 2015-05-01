var eclint = require('eclint');
var gulp = require('gulp');

module.exports = function() {
	return gulp.src([
			'*',
			'tasks/*',
			'lib/**'
		])
		.pipe(eclint.fix())
		.pipe(gulp.dest(function (file) {
			return file.base;
		}));
};
