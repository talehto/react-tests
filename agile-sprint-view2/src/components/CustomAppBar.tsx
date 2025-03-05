import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

interface CustomAppBarProps {
  title: string;
  onButtonClick: () => void;
  sx?: object;
}

const CustomAppBar: React.FC<CustomAppBarProps> = ({ title, onButtonClick, sx }) => {
  return (
    <AppBar position="static" sx={{ marginBottom: 2, borderRadius: 2, minHeight: '60px', marginLeft: 2, ...sx }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
