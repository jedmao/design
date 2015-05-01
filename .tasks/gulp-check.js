var eclint = require('eclint');
var gulp = require('gulp');
var path = require('path');

module.exports = function() {
	var hasErrors = false;
	var stream = gulp.src([
			'*',
			'tasks/*',
			'lib/**'
		])
		.pipe(eclint.check({
			reporter: function(file, message) {
				hasErrors = true;
				var relativePath = path.relative('.', file.path);
				console.error(relativePath + ':', message);
			}
		}));
	stream.on('finish', function() {
		if (hasErrors) {
			process.exit(1);
		}
	});
	return stream;
};
