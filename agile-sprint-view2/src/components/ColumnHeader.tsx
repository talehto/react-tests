import React from 'react';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

interface ColumnHeaderProps {
  title: string;
  size: { xs: number, sm?: number, md?: number, lg?: number, xl?: number };
  margin?: string | number;
}

const ColumnHeader: React.FC<ColumnHeaderProps> = ({ title, size }) => {
  return (
    <Grid size={size} sx={{  }}>
      <Card sx={{ mt: 2 }}>
        <CardHeader title={title} 
          sx={{ height: "96vh", textAlign: 'center', alignItems: 'flex-start' }}
        />
      </Card>
    </Grid>
  );
}

export default ColumnHeader;
