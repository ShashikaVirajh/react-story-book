import { Meta, StoryObj } from '@storybook/react';
import { BackButton } from './back-button.component';

const meta: Meta<typeof BackButton> = {
  component: BackButton,
  title: 'Components/BackButton',
  argTypes: {
    text: { control: 'text', defaultValue: 'Back' },
    style: { control: 'object' },
    onClick: { action: 'clicked' }
  }
} as Meta;

export default meta;

type Story = StoryObj<typeof BackButton>;

export const WithCustomText: Story = {
  args: {
    text: 'Go Back'
  }
};

export const WithCustomStyle: Story = {
  args: {
    style: { backgroundColor: '#F5F5F5', padding: '1rem' }
  }
};

export const WithClickHandler: Story = {
  args: {
    onClick: () => alert('Back button clicked')
  }
};

export const WithDarkBackground: Story = {
  args: {
    text: 'Im in dark background'
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'black', value: 'black' },
        { name: 'blue', value: 'blue' }
      ]
    }
  }
};
