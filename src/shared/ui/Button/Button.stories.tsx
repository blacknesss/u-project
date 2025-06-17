import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button, ButtonSize, ThemeButton } from './Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;

export const Clear: Story = {
    parameters: {
        docs: {
            description: {
                story: 'tech',
            },
        },
    },
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Text',
    },
};

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Text',
    },
};

export const OutlineSizeL: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Text',
        size: ButtonSize.L,
    },
};

export const OutlineSizeXl: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
        size: ButtonSize.XL,
    },
};

export const Background: Story = {
    args: {
        theme: ThemeButton.BACKGROUND,
        children: 'Text',
    },
};

export const BackgroundInverted: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: 'Text',
    },
};

export const Square: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: '>',
        square: true,
    },
};

export const SquareSizeL: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXl: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: '<',
        square: true,
        size: ButtonSize.XL,
    },
};
