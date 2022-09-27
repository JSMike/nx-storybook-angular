import { rootMain } from '../../../.storybook/main';
import type { StorybookConfig, Options } from '@storybook/core-common';

const isDev = !!process.env['development'];

const config: StorybookConfig = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    '../src/app/**/*.stories.mdx',
    '../src/app/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: { transcludeMarkdown: true },
    },
    '@storybook/addon-controls',
    '@storybook/addon-actions'
  ],
  refs: {
    angular: {
      title: 'Angular',
      url: isDev ? 'http://localhost:4400' : '/angular-13/latest' 
    },
    styles: {
      title: 'Styles',
      url: isDev ? 'http://localhost:4500' : '/styles/latest'
    }
  },
  webpackFinal: async (config, { configType }: Options) => {
    // apply any global webpack configs that might have been specified in .storybook/main.ts
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType } as Options);
    }

    // add your own webpack tweaks if needed

    return config;
  },
};

module.exports = config;
