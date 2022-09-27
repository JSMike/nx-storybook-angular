import type { StorybookConfig } from '@storybook/core-common';

export const rootMain: StorybookConfig = {
  stories: [],
  core: {
    builder: 'webpack5',
    disableTelemetry: true
  },
  addons: [ 
    // calling each addon individually instead of using addon-essentials allows control over the order in which they addons are displayed in the toolbar and addon pane
    {
      name: '@storybook/addon-docs',
      options: { transcludeMarkdown: true }, // Overriding of these packages only works if you're not using essentials, this flag allows for importing .md files into mdx for things like changelogs
    },
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    '@storybook/addon-toolbars',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    '@storybook/addon-a11y',
  ],
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
};
