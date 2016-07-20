"use strict";
var gulp = require("gulp");
var connect = require("gulp-connect");
var open = require("gulp-open");
var gutil = require('gulp-util');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require("gulp-concat");
var lint = require("gulp-eslint");

var config={
    port:9005,
devBaseUrl:"http://localhost",
paths:{
    html:'./src/*.html',
     js:[
         './src/**/*.js',
         "./node_modules/office-ui-fabric/dist/js/jquery.fabric.js"],
    dist:'./dist',
    mainJs:'./src/main.js',
    css:["node_modules/office-ui-fabric/dist/css/fabric.components.css",
         "node_modules/office-ui-fabric/dist/css/fabric.css",
       
    ]

}

}


gulp.task("connect",function(){
    connect.server({
        root:['dist'],
        port:config.port,
        base:config.devBaseUrl,
        livereload:true
    });
});

gulp.task("watch",function(){
  
     gulp.watch(config.paths.html,['html']);
   gulp.watch(config.paths.js,['js','lint']);
  
});
gulp.task("open",['connect'],function(){
    gulp.src('dist/index.html')
        .pipe(open({app:"chrome",uri:config.devBaseUrl+':'+config.port +'/'}));
});
gulp.task("html",function(){
    gutil.log('in html');
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload())
});
gulp.task("js",function(){
    
    browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on("error",console.error.bind(console))
    .pipe(source("bundle.js"))
   .pipe(gulp.dest(config.paths.dist+'/scripts'))
   .pipe(connect.reload());
});             

gulp.task("lint",function(){
    
    gulp.src(config.paths.js)
    .pipe(lint({config:'.eslintrc.json'}))
    .pipe(lint.format());
    
});             


gulp.task("css",function(){
    
    gulp.src(config.paths.css)
    .pipe(concat("bundle.css"))
    .pipe(gulp.dest(config.paths.dist+'/css'));
    
});       
gulp.task("default",['html','js','css','lint','open','watch']);
