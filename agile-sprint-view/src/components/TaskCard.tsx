import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Task, TaskCategory } from '../types';

interface TaskCardProps {
  task: Task;
  //onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
}

//const TaskCard: React.FC<TaskCardProps> = ({ task, onDragStart }) => {
const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <Card
      //draggable
      // onDragStart={onDragStart}
      style={{ margin: '8px', cursor: 'grab' }}
    >
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2">{task.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
