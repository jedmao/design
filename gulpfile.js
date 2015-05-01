var gulp = require('gulp');

gulp.task('default', ['lint'], loadTask('test'));
gulp.task('lint', ['check', 'tslint']);
gulp.task('check', ['build'], loadTask('check'));
gulp.task('tslint', loadTask('tslint'));
gulp.task('test', ['build'], loadTask('test'));
gulp.task('build', ['scripts']);
gulp.task('scripts', ['clean'], loadTask('scripts'));
gulp.task('clean', loadTask('clean'));
gulp.task('fix', ['build'], loadTask('fix'));

function loadTask(taskName) {
	return require('./.tasks/gulp-' + taskName);
}
