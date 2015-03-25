/**!
 * Gulp
 * @author: xiaobaicaistring@gmail.com
 *
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');
var uglify = require('gulp-uglify');

var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');

/*default*/
gulp.task('default', ['browser-sync'], function () {
    gulp.watch(["../wechatCMS/*"], reload);
});

gulp.task('browser-sync', ['nodemon'], function () {
    var files = [
        "views/*"
    ];
    browserSync.init(files, {
        proxy: {
            host: "http://localhost:3000"
        }
    });
});
gulp.task('nodemon', function () {
    nodemon({script: 'wechat.js'});
});

gulp.task('watch', function () {
    gulp.watch('public/css/*.less', ['less']);  // Watch all the .less files, then run the less task
});
