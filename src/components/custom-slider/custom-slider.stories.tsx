import { Meta, StoryObj } from '@storybook/react';
import { CustomSlider } from './custom-slider.component';

const meta: Meta<typeof CustomSlider> = {
  title: 'Components/CustomSlider',
  tags: ['autodocs'],
  component: CustomSlider,
  args: {
    width: '25%'
  },
  argTypes: {
    onChange: { action: 'changed' }
  }
};

export default meta;

type Story = StoryObj<typeof CustomSlider>;

export const Default: Story = {
  args: {
    defaultValue: 10,
    step: 10,
    min: 0,
    max: 100,
    marks: false,
    label: 'My Slider'
  }
};

export const Disabled: Story = {
  args: {
    defaultValue: 50,
    step: 10,
    min: 0,
    max: 100,
    marks: false,
    label: 'My Slider',
    disabled: true
  }
};

export const WithMarks: Story = {
  args: {
    defaultValue: 50,
    step: 10,
    min: 0,
    max: 100,
    label: 'My Slider',
    marks: true
  }
};

export const WithCustomSize: Story = {
  args: {
    defaultValue: 50,
    step: 10,
    min: 0,
    max: 100,
    marks: false,
    label: 'My Slider',
    size: 'medium'
  }
};
