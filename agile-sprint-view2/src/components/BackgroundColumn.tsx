import React from 'react';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { useTheme } from '@mui/material/styles';
import { SxProps, Theme } from '@mui/system';

interface BackgroundColumnProps {
  title: string;
  size: { xs: number, sm?: number, md?: number, lg?: number, xl?: number };
  sx_args?: SxProps<Theme>;
}

const ColumnHeader: React.FC<BackgroundColumnProps> = ({ title, size, sx_args }) => {
  const theme = useTheme();

  return (
    <Grid size={size} sx={{  }}>
      <Card sx={{ backgroundColor: theme.palette.column_background.default, ...sx_args }}>
        <CardHeader title={title} 
          sx={{ height: "96vh", textAlign: 'center', alignItems: 'flex-start' }}
        />
      </Card>
    </Grid>
  );
}

export default ColumnHeader;
