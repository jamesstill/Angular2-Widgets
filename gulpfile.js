"use strict";
var gulp = require("gulp");
var del = require("del");
var sourcemaps = require('gulp-sourcemaps');

/**
 * Remove build directory.
 */
gulp.task('clean', function (cb) {
    return del(["build"], cb);
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", ["server", "src"], function () {
    console.log("Building resources...");   
});

gulp.task("server", function () {
    return gulp.src([
        'index.js',
        'index.html', 
        'systemjs.config.js', 
        'package.json'
    ], { cwd: "server"})
        .pipe(gulp.dest("build"));
});

gulp.task("src", function () {
    return gulp.src([
        "src/**/*", 
        "!**/*.ts",
        "!src/index.html",         /* server task will get these next three... */
        "!src/systemjs.config.js",
        "!src/package.json"
    ])
        .pipe(gulp.dest("build"));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", function () {
    return gulp.src([
        'bootstrap/dist/**',
        'core-js/client/shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/Reflect.js',
        'rxjs/bundles/**',
        'rxjs/Observable/**',
        'rxjs/add/operator/map.js',
        'rxjs/add/operator/do.js',
        'rxjs/add/operator/catch.js',
        'rxjs/add/operator/throw.js',
        'zone.js/dist/**',
        '@angular/**/bundles/*'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("build/lib"));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
//gulp.task('watch', function () {
//    gulp.watch(["src/**/*.ts"], ['compile']).on('change', function (e) {
//        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
//    });
//    gulp.watch(["src/**/*.html", "src/**/*.css"], ['resources']).on('change', function (e) {
//        console.log('Resource file ' + e.path + ' has been changed. Updating.');
//    });
//});

/**
 * Build the project.
 */
//gulp.task("build", ['compile', 'resources', 'libs'], function () {
//    console.log("Building the project ...");
//});

gulp.task("build", ['resources', 'libs'], function () {
    console.log("Building the project ...");
});

//# sourceMappingURL=gulpfile.js.map