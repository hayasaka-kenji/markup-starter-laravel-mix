const mix = require('laravel-mix');

mix
  .js('src/main.js', 'dist/')
  .sass('src/style.scss', 'dist/')
  .copy('src/index.html', 'dist/')
  .browserSync({
    files: 'dist/**/*',
    server: 'dist',
    proxy: false
  });