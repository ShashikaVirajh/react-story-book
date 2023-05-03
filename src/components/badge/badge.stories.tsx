import { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge.component';

const meta: Meta<typeof Badge> = {
  title: 'COMPONENTS/Badge',
  tags: ['autodocs'],
  component: Badge,
  argTypes: {
    onClick: { action: 'clicked' }
  }
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const TextAndNumber: Story = {
  args: {
    text: 'Badge',
    value: '1'
  }
};

export const WithCustomColors: Story = {
  args: {
    text: 'Badge',
    value: '2',
    textColor: 'white',
    valueColor: 'orange',
    badgeBackColor: 'purple'
  }
};

export const Clickable: Story = {
  args: {
    text: 'Badge',
    value: '3',
    onClick: () => alert('Clicked!')
  }
};
