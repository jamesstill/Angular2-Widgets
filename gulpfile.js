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
        'rxjs/**',
        'zone.js/dist/**',
        '@angular/**/bundles/*'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("build/lib"));
});

gulp.task("build", ['resources', 'libs'], function () {
    console.log("Building the project ...");
});

//# sourceMappingURL=gulpfile.js.map