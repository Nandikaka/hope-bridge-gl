import type { ReactNode } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { COLORS } from '../../theme/colors';

type BannerProps = {
  title: ReactNode;
  description?: ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  action?: ReactNode;
};

export const Banner = ({
  title,
  description,
  image,
  imageAlt = '',
  imagePosition = 'left',
  action,
}: BannerProps) => {
  return (
    <Stack
      sx={{
        flexDirection: {
          xs: 'column',
          md: imagePosition === 'left' ? 'row-reverse' : 'row',
        },
        width: '100%',
        height: { md: 420 },
        borderRadius: '16px',
        overflow: 'hidden',
        backgroundColor: COLORS.SECONDARY,
        color: 'white',
      }}
    >
      <Stack
        spacing={3}
        sx={{
          flex: { md: '0 0 60%' },
          justifyContent: 'center',
          padding: { xs: '32px 24px', md: '48px 56px' },
        }}
      >
        <Typography
          component='h2'
          sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 500, lineHeight: 1.25 }}
        >
          {title}
        </Typography>
        {description && (
          <Box
            sx={{
              fontSize: 15,
              lineHeight: 1.6,
              opacity: 0.85,
              '& p': { margin: 0 },
              '& p + p': { marginTop: '12px' },
            }}
          >
            {typeof description === 'string' ? <p>{description}</p> : description}
          </Box>
        )}
        {action && <Box>{action}</Box>}
      </Stack>

      {image && (
        <Box
          sx={{
            position: 'relative',
            flex: { md: '0 0 40%' },
            height: { xs: 300, sm: 360, md: '100%' },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              left: '22%',
              bottom: '-25%',
              width: '50%',
              height: '100%',
              borderRadius: '24px',
              backgroundColor: COLORS.PRIMARY,
              transform: 'rotate(-18deg)',
            }}
          />
          <Box
            component='img'
            src={image}
            alt={imageAlt}
            sx={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'block',
              height: '92%',
              maxWidth: '100%',
              objectFit: 'contain',
              objectPosition: 'bottom',
            }}
          />
        </Box>
      )}
    </Stack>
  );
};
