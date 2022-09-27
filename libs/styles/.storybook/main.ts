import path = require('path');
import { rootMain } from '../../../.storybook/main';
import type { StorybookConfig, Options } from '@storybook/core-common';

const config: StorybookConfig = {
  ...rootMain,

  stories: [
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  webpackFinal: async (config, { configType }: Options) => {
    // apply any global webpack configs that might have been specified in .storybook/main.ts
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType } as Options);
    }

    // @ts-ignore
    config.module.rules = [
      // @ts-ignore
      ...config.module.rules,
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentWidth: 2,
                includePaths: [path.resolve(__dirname, '../src/lib')],
              },
            },
          },
        ],
      }
    ];

    // add your own webpack tweaks if needed

    return config;
  },
};

module.exports = config;
