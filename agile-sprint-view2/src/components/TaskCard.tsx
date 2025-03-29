import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

interface TaskCardProps {
  content: string;
  id: string;
  swimlaneKey: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ id, content, swimlaneKey }) => {

  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id,
    data: { key: swimlaneKey },
  });

  const style = {
    transform: CSS.Translate.toString(transform)
  };

  return (
    <Card ref={setNodeRef} style={style} {...listeners} {...attributes} sx={{ mt: 1 }}>
      <CardContent sx={{ bgcolor: 'background.default', border: '1px solid', borderColor: 'primary.main' }}>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
