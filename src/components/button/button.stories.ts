import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'COMPONENTS/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'hello'
  },
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true
  }
};

export const Secondary: Story = {
  args: {}
};

export const Large: Story = {
  args: {
    size: 'large'
  }
};
