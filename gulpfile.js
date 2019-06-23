// Gulp.js configuration
const
  gulp = require('gulp'),
  terser = require('gulp-terser'),

  // JS configuration
  jsCfg = {
    in: 'src/js/*.js',
    out: 'dist/',
    terser: {
      mangle: {
        toplevel: true
      },
      compress: {
        passes: 5,
        drop_console: true
      },
      output: {
        quote_style: 1
      },
      ecma: 5,
      ie8: false,
      module: false
    }
  };


// JS minification
function js() {

  return gulp.src(jsCfg.in)
    .pipe(terser(jsCfg.terser))
    .pipe(gulp.dest(jsCfg.out));

}
exports.js = js;


// build
exports.default = js;
