var del = require('del');
var gulp = require('gulp');

module.exports = function() {
	gulp.task('clean', function(done) {
		del(['js'], done);
	});
};
