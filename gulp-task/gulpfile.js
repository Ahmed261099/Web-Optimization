
const gulp = require('gulp');
const { src, dest } = require("gulp")

var globs ={
    html: "src/html/*.html",
    css:"src/css/**/*.css",
    img:'src/images/*',
    js:'src/js/**/*.js'
}

const imagemin = require('gulp-imagemin');

function imgMinify() {
    return gulp.src(globs.img).pipe(imagemin()).pipe(gulp.dest('dist/images'))
}

exports.img = imgMinify


const htmlmin = require('gulp-htmlmin');
function minifyHTML() {
    return src(globs.html).pipe(htmlmin({ collapseWhitespace: true, removeComments: true })).pipe(gulp.dest('dist'))
}

exports.html = minifyHTML


//minify js files and copy it to dist folder
const concat = require('gulp-concat');
const terser = require('gulp-terser');

function jsMinify() {
  //search for sourcemaps
    return src(globs.js,{sourcemaps:true}) //path includeing all js files in all folders
    
        //concate all js files in all.min.js
        .pipe(concat('all.min.js'))
        //use terser to minify js files
        .pipe(terser())
        //create source map file in the same directory
        .pipe(dest('dist/assets/js',{sourcemaps:'.'}))
}
exports.js = jsMinify


//minify css files and copy it to dist folder

var cleanCss = require('gulp-clean-css');
function cssMinify() {
    return src(globs.css)
        //concate all css files in style.min.css
        .pipe(concat('style.min.css'))
        //minify file 
        .pipe(cleanCss())
        .pipe(dest('dist/assets/css'))
}
exports.css = cssMinify
