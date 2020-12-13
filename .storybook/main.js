const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
  ],
  webpackFinal: async (config, { configType }) => {
    // config === webpack config object
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        {
          loader: 'css-loader',
          options: {
            esModule: false,
          },
        },
        'sass-loader',
      ],
    });
    return config;
  },
};
