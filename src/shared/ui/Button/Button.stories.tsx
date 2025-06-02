import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button, ThemeButton } from './Button';

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
