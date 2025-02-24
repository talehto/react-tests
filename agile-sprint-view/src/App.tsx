import React from 'react';
import AgileSprintView from './components/AgileSprintView';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AgileSprintView />
    </ThemeProvider>
  );
};

export default App;
