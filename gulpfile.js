const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');
const pump = require('pump');
const concat = require('gulp-concat');
const flatten = require('gulp-flatten');
const rename = require('gulp-rename');
// const uglifycss = require('gulp-uglifycss');

const gulpConfig = {
    paths: {
        scss: `${__dirname}/dev/scss/**/*.scss`,
        scssDest: `${__dirname}/app/assets/css`,
        js: [`${__dirname}/dev/scripts/main.js`],
        jsDest: `${__dirname}/app/assets/scripts`,
        nunjucks: `${__dirname}/app/views/**/*.njk`,
    }
};

gulp.task('sass', () => {
    try {
        return gulp.src(gulpConfig.paths.scss)
        .pipe(sass({outputStyle: 'compressed',
            includePaths: []})
            .on('error', sass.logError))
            .pipe(gulp.dest(gulpConfig.paths.scssDest))
            .pipe(browserSync.reload({
            stream: true
            }));
    }
    catch(error) {
        console.log(error);
    }
});


gulp.task('uglyjs', (cb) => {
    pump([
        gulp.src(gulpConfig.paths.js),
        uglify(),
        gulp.dest(gulpConfig.paths.jsDest)
    ],cb)
    .pipe(browserSync.reload({
        stream: true
    }));
});

// refreshes on njk file change
gulp.task('nunjucks', () => {
    browserSync.reload();
});

// watch all scss and js files, run required tasks, refresh browser
gulp.task('watch', ['sass'], () => {
  gulp.watch(gulpConfig.paths.scss, {interval: 1000, mode: 'poll'}, ['sass', 'reload']);
  gulp.watch(gulpConfig.paths.js, ['uglyjs', 'reload']);
  gulp.watch(gulpConfig.paths.nunjucks, ['nunjucks', 'reload']);
});

gulp.task('reload', () => {
    browserSync.reload();
});

gulp.task('browserSync', () => {
  browserSync.init({
    proxy: 'http://localhost:9700',
    port: 9701,
    reloadDelay: 1000,
    ghostMode: {
    clicks: false,
    forms: false,
    scroll: false
},
    https: {
    key: './dev/certs/server.key',
    cert: './dev/certs/server.crt'
    },
    open: false
  });
});

gulp.task('server', () => {
  nodemon({
    script: 'app.js',
    ext: 'js',
  }).on('quit', function() {
    process.exit(0);
  });
});

gulp.task('default', (done) => {
  runSequence('watch', 'sass', 'uglyjs', 'server', 'browserSync', done);
});
