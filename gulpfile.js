const gulp = require('gulp');
const babel = require('gulp-babel');

//编译
gulp.task('default', function() {
    gulp.src(['./src/**/*.es6', './src/public/*/*.es6'])
        .pipe(babel({
			presets: ['es2015',"stage-0"]
		}))
        .pipe(gulp.dest('./build'));
});

//监听哪些文件发生了变化
var watcher = gulp.watch(['./src/**/*.es6', './src/public/*/*.es6'],
     ['default']);

watcher.on('change', function(event) {
  console.log('File: ' + event.path + ' was ' + event.type + ', running tasks...');
});