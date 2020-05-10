let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");
let cssmin = require("gulp-clean-css");
let uglify = require("gulp-uglify");
let concat = require("gulp-concat");
let rename= require("gulp-rename");
let babel = require('gulp-babel');
let connect = require('gulp-connect');
let sass = require("gulp-sass");
let jsSrc = "./src/js"

// 监听任务
gulp.task("watchall",async ()=>{
    // 压缩html
    gulp.watch("./src/*.html",async ()=>{
        gulp.src("./src/*.html")
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,  
            collapseBooleanAttributes: true,
            removeEmptyAttributes: true, 
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true, 
            minifyJS: true,
            minifyCSS: true
        }))
        .pipe(gulp.dest("./dist/Lining"));
    });
    // sass编译,压缩css
    gulp.watch("./src/scss/*.scss",async ()=>{
        gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(cssmin())
        .pipe(gulp.dest("./dist/Lining/css"));
    });
    // 压缩js
    gulp.watch([jsSrc+"/index.js",jsSrc+"jquery-3.2.1.min.js"],async ()=>{
        gulp.src("./src/js/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat("common.js"))
        .pipe(uglify())
        .pipe(rename("common.min.js"))
        .pipe(gulp.dest("./dist/Lining/js"));
    });
    // 压缩图片
    gulp.watch("./src/images/*.*",async ()=>{
        gulp.src("./src/images/*.*")
        .pipe(gulp.dest("./dist/Lining/images"));
    });
});

// 启动服务
gulp.task('connect',function() {
    connect.server({
        root: './dist', //root表示启动的服务器根目录，等同于phpstudy 的www目录
        livereload:true
    })
});



