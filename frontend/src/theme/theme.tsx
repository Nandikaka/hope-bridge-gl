import { createTheme } from '@mui/material';
import { COLORS } from './colors';

export const theme = createTheme({
  typography: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  palette: {
    background: {
      default: COLORS.BACKGROUND,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'inherit',
          fontSize: '1rem',
          textTransform: 'none',
          borderRadius: 100,
        },
        contained: {
          color: 'white',
          backgroundColor: COLORS.PRIMARY,
          boxShadow: 'none',
        },
      },
    },
  },
});
