var gulp = require('gulp');
var bro = require('gulp-bro')

gulp.task('watch', ['bundle'], function(){
    gulp.watch('**/*.js', ['bundle']);
})

gulp.task('bundle', function(){
        return gulp.src('index.js')//, { read: false })
            .pipe(bro())
            .pipe(gulp.dest('bundle/'))
    }
);