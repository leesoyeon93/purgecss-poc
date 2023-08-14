const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer,

    purgecss({
      content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
      css: ['./src/styles/*'],
      fontFace: true,
      keyframes: true,
      rejected: true,
      safelist: ['yep', 'button', /^nav-/],
      skippedContentGlobs: ['node_modules/**', './src/components/**']
    }),
    cssnano({
      preset: 'default',
    }),
  ]
};
