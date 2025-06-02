import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        // "@storybook/addon-links",
        // "@storybook/addon-essentials",
        // "@storybook/addon-interactions",

        '@storybook/addon-onboarding',
        '@storybook/addon-docs',
        '@storybook/addon-webpack5-compiler-babel',
        '@storybook/addon-styling-webpack',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
};
export default config;
