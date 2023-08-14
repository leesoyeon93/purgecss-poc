const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    autoprefixer,

    purgecss({
      content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
    }),
    cssnano({
      preset: 'default',
    }),
  ]
};
