import React from 'react';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { useTheme } from '@mui/material/styles';
import { SxProps, Theme } from '@mui/system';

interface BackgroundColumnProps {
  title: string;
  size: { xs: number, sm?: number, md?: number, lg?: number, xl?: number };
  padding?: number;
  sx_args?: SxProps<Theme>;
}

const BackgroundColumn: React.FC<BackgroundColumnProps> = ({ title, size, padding, sx_args }) => {
  const theme = useTheme();

  return (
    <Grid size={size} sx={{ padding, display: 'flex', flexDirection: 'column' }}>
      <Card sx={{ flexGrow: 1, backgroundColor: theme.palette.column_background.default, ...sx_args }}>
        <CardHeader title={title} 
          sx={{ textAlign: 'center', alignItems: 'flex-start' }}
        />
      </Card>
    </Grid>
  );
}

export default BackgroundColumn;
