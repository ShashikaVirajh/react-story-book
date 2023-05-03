import { Slider } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

export const CustomSlider: FC<Props> = ({
  defaultValue,
  step,
  min,
  max,
  label,
  width,
  onChange,
  size = 'small',
  marks = true,
  disabled = false
}): JSX.Element => (
  <Box sx={{ width }}>
    <Slider
      defaultValue={defaultValue}
      step={step}
      min={min}
      max={max}
      aria-label={label}
      size={size}
      onChange={onChange}
      marks={marks}
      disabled={disabled}
    />
  </Box>
);

type Props = {
  defaultValue: number;
  step: number;
  min: number;
  max: number;
  label?: string;
  width?: string | number;
  size?: 'small' | 'medium';
  onChange: (e: Event, newValue: number | number[]) => void;
  marks?: boolean;
  disabled?: boolean;
};
