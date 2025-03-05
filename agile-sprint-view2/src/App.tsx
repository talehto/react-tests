import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { CssBaseline, ThemeProvider, AppBar, Toolbar, Typography, Button } from '@mui/material';
import BackgroundColumn from './components/BackgroundColumn';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" sx={{ width: "88vw", margin: '0 auto', borderRadius: 3 }}>
        <Toolbar sx={{ }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kanban Board
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: "90vw", height: "90vh", bgcolor: 'background.default', margin: '0 auto' }}>
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
