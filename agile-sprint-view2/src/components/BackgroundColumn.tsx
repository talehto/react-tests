import React from 'react';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
//import CardHeader from '@mui/material/CardHeader';
import { useTheme } from '@mui/material/styles';
import { SxProps, Theme } from '@mui/system';

interface BackgroundColumnProps {
  title: string;
  size: { xs: number, sm?: number, md?: number, lg?: number, xl?: number };
  grid_sx_args?: SxProps<Theme>;
  card_sx_args?: SxProps<Theme>;
}

const BackgroundColumn: React.FC<BackgroundColumnProps> = ({ size, grid_sx_args, card_sx_args }) => {
  const theme = useTheme();

  return (
    <Grid size={size} sx={{ display: 'flex', flexDirection: 'column', ...grid_sx_args }}>
      <Card sx={{ flexGrow: 1, 
                  backgroundColor: theme.palette.column_background.default, 
                  borderRadius: 3,
                  border: '1px solid', 
                  borderColor: 'primary.main', 
                  ...card_sx_args }}>
      </Card>
    </Grid>
  );
}

export default BackgroundColumn;
