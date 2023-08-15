import { createTheme } from '@mui/material/styles';

export const createThemeWithMode = (mode) => {
    return createTheme({
      palette: {
        mode: mode,
      },
    });
  };