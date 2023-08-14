const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  plugins: [
      {
        plugin: {
          overrideWebpackConfig: ({ webpackConfig }) => {
            webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}));
            return webpackConfig;
          },
        },
        options: {
            source: 'tsconfig',
            baseUrl: './src',
            tsConfigPath: 'tsconfig.paths',
        },
      },
  ],
  webpack:{
    configure:{
      module:{
        rules:[
          { test: /\.ts$/, 
          use: 'ts-loader' 
          },
          {
            test: /\.css$/,
            use: [
              { loader: "postcss-loader",
                options: {
                  sourceMap: false,
                },
              },
            ]
          },
          {
            test: /\.jsx?$/,
            use: ['babel-loader'],
          }
        ]
      },
    },
  },
};