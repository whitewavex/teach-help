var gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    cssmin = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
    rename = require('gulp-rename'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

var path = {
    build: {
        html: 'build/',
        styles: 'build/',
        js: 'build/js',
        images: 'build/images',
        fonts: 'build/fonts',
        libs: 'build/libs'
    },
    src: {
        main: 'src/',
        html: 'src/*.html',
        styles: 'src/scss/style.scss',
        js: 'src/js/main.js',
        images: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*',
        libsScript: 'src/libs/**/*.js',
        libsStyles: 'src/libs/**/*.css'
    },
    watch: {
        html: 'src/**/*.html',
        styles: 'src/scss/**/*.scss',
        js: 'src/js/**/*.js',
        images: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*',
        libs: 'src/libs/**/*.*'
    },
    clean: 'build'
};

var config = {
    server: {
        baseDir: './build'
    },
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend"
};

gulp.task('html', function() {
    return gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
});

gulp.task('styles', function() {
    return gulp.src(path.src.styles)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.styles));
});

gulp.task('js', function() {
    return gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js));
});

gulp.task('images', function() {
    return gulp.src(path.src.images)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.images))
});

gulp.task('fonts', function() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task('libs:js', function() {
   return gulp.src(path.src.libsScript)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.libs));
});

gulp.task('libs:css', function() {
   return gulp.src(path.src.libsStyles)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.libs));
});

gulp.task('libs', gulp.parallel('libs:js', 'libs:css'));

gulp.task('clean', function() {
    return del('build');
});

gulp.task('build', gulp.series('clean', gulp.parallel('html', 'styles', 'js', 'images', 'fonts', 'libs')));

gulp.task('watch', function() {
    gulp.watch(path.watch.html, gulp.series('html'));
    gulp.watch(path.watch.styles, gulp.series('styles'));
    gulp.watch(path.watch.js, gulp.series('js'));
    gulp.watch(path.watch.images, gulp.series('images'));
    gulp.watch(path.watch.fonts, gulp.series('fonts'));
    gulp.watch(path.watch.libs, gulp.series('libs'));
});

gulp.task('server', function() {
    browserSync.init(config);
    browserSync.watch('build/**/*.*').on('change', reload);
});

gulp.task('default', gulp.series('build', gulp.parallel('watch', 'server')));

