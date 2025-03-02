import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { CssBaseline, ThemeProvider } from '@mui/material';
import ColumnHeader from './components/ColumnHeader';
import theme from './theme';

// const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, width: "100vw", height: "100vh", bgcolor: 'background.default' }}>
        <Grid container spacing={2} sx={{ mr: 2, ml: 2 }}>
          <ColumnHeader title="Todo" size={{ xs: 4, md: 4 }} sx_args={{ mt: 2 }} />
          <ColumnHeader title="In Progress" size={{ xs: 4, md: 4 }} sx_args={{ mt: 2 }}  />
          <ColumnHeader title="Done" size={{ xs: 4, md: 4 }} sx_args={{ mt: 2 }} />
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
