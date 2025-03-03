import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { CssBaseline, ThemeProvider } from '@mui/material';
import BackgroundColumn from './components/BackgroundColumn';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: "100vw", height: "100vh", bgcolor: 'background.default' }}>
        <Grid container sx={{ flexGrow: 1 }}>
          <BackgroundColumn title="Todo" size={{ xs: 4, md: 4 }} padding={2} sx_args={{ mt: 2 }} />
          <BackgroundColumn title="In Progress" size={{ xs: 4, md: 4 }} padding={2} sx_args={{ mt: 2 }}  />
          <BackgroundColumn title="Done" size={{ xs: 4, md: 4 }} padding={2} sx_args={{ mt: 2 }} />
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
