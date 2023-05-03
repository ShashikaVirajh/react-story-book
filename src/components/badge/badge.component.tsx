import { Typography, Box } from '@mui/material';
import { FC } from 'react';

export const Badge: FC<Props> = ({
  text,
  value,
  onClick,
  textColor = 'black',
  valueColor = 'blue',
  badgeBackColor = 'lightblue',
  borderRadius = '0.4rem',
  padding = '1rem',
  width = '6rem',
  height = '0.5rem'
}): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: padding,
        cursor: onClick ? 'pointer' : 'default',
        backgroundColor: badgeBackColor,
        height,
        width,
        borderRadius
      }}
      onClick={onClick}
    >
      <Typography variant='body2' color={textColor} sx={{ textAlign: 'center' }}>
        {text}
      </Typography>

      {value && (
        <Typography
          variant='body2'
          color={valueColor}
          sx={{
            textAlign: 'center',
            background: 'green',
            borderRadius: '50%',
            ml: text ? '0.2rem' : undefined,
            px: 0.7
          }}
        >
          {value}
        </Typography>
      )}
    </Box>
  );
};

type Props = {
  text: string;
  value?: string;
  onClick?: () => void;
  textColor?: string;
  valueColor?: string;
  badgeBackColor?: string;
  borderRadius?: string;
  padding?: string;
  width?: string;
  height?: string;
};
