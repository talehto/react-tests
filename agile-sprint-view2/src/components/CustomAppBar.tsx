import React from 'react';
import { AppBar, Toolbar, Typography} from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

interface CustomAppBarProps {
  title: string;
  onButtonClick: () => void;
  sx?: object;
}

const CustomAppBar: React.FC<CustomAppBarProps> = ({ title, onButtonClick, sx }) => {
  return (
    <AppBar position="static" sx={{ borderRadius: 2, minHeight: '60px', ...sx }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Fab color="secondary" aria-label="add" onClick={onButtonClick}>
          <AddIcon />
        </Fab>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
