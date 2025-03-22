import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface TaskCardProps {
  content: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ content }) => {
  return (
    <Card sx={{ mt: 1 }}>
      <CardContent sx={{ bgcolor: 'background.default', border: '1px solid', borderColor: 'primary.main' }}>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
