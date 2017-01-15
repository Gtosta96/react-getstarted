const gulp = require('gulp');
const gulpDebug = require('gulp-debug');
const gulpShell = require('gulp-shell');

gulp.task('run:dev', () => {
	gulp.src('app/**/*.jsx')
	.pipe(gulpDebug())
	.pipe(gulpShell('npm run eslint'))
	.pipe(gulpShell('npm run dev'));
});
