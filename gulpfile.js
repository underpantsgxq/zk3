var gulp = require('gulp')
var server = require('gulp-webserver')
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 8888,
            open: true,
            proxies: [
                { source: "/api/get/train_tickets", target: "http://localhost:3000/api/get/train_tickets" }
            ]
        }))
})