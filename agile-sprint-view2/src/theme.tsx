import { createTheme, PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    column_background?: {
      default: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#ECCDB4', // Replace with your primary color
    },
    secondary: {
      main: '#dc004e', // Replace with your secondary color
    },
    background: {
      default: '#F9FBE7', // Replace with your background color
    },
    text: {
      primary: '#000000', // Replace with your primary text color
      secondary: '#ffffff', // Replace with your secondary text color
    },    // Add more colors as needed
    column_background: {
      default: '#F0EDD4', // Replace with your column background color
    },
  }
});

export default theme;
