import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { CssBaseline, ThemeProvider, AppBar, Toolbar, Typography, Button } from '@mui/material';
import theme from './theme';
import CustomAppBar from './components/CustomAppBar';
import BackgroundColumn from './components/BackgroundColumn';

const App: React.FC = () => {
  
  const handleButtonClick = () => {
    console.log('Button clicked');
  };
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: "100vw", height: "100vh", bgcolor: 'background.default' }}>
      <CustomAppBar title="Kanban board" sx={{ width: "98vw",  mt: 2 }} onButtonClick={handleButtonClick} />
        <Grid container sx={{ flexGrow: 1 }}>
          <BackgroundColumn title="Todo" size={{ xs: 4, md: 4 }} 
            grid_sx_args={{ pl: 14, pr: 0, pt: 2, pb: 2 }} card_sx_args={{ mt: 2 }} />
          <BackgroundColumn title="In Progress" size={{ xs: 4, md: 4 }} 
            grid_sx_args={{ pl: 7, pr: 7, pt: 2, pb: 2 }} card_sx_args={{ mt: 2 }}  />
          <BackgroundColumn title="Done" size={{ xs: 4, md: 4 }} 
            grid_sx_args={{ pl: 0, pr: 14, pt: 2, pb: 2 }} card_sx_args={{ mt: 2 }} />
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
