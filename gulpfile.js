
var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var eslint = require('gulp-eslint');

var browserSync = require('browser-sync').create();


// process JS files and return the stream.

gulp.task('build-js-dev', function () {
    return gulp.src([
        // 'node_modules/jquery/dist/jquery.min.js',
        // 'node_modules/underscore/underscore.js',
        // 'node_modules/backbone/backbone.js',
        // 'node_modules/requirejs/require.js',
        'js/models/*.js',
        'js/views/*.js',
        'js/collections/*.js',
        'js/routes/*.js',
        'js/*.js'
    ])
        .pipe(concat('build.js'))
        .pipe(gulp.dest('build/js'));
});
// create a task that ensures the `js` task is complete before
// reloading browsers

gulp.task('js-watch', ['build-js-dev'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('build-js-prod', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/underscore/underscore.js',
        'node_modules/backbone/backbone.js',
        'node_modules/requirejs/require.js',
        'js/models/*.js',
        'js/views/*.js',
        'js/collections/*.js',
        'js/routes/*.js',
        'js/*.js'
    ])
        .pipe(concat('build.js'))
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.min.js'
            }
        }))
        .pipe(gulp.dest('build/js'));
});


gulp.task('server', ['build-js-dev'],  function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(['js/**/*.js','js/*.js'], ['js-watch']);
});

gulp.task('default', ['server']);

