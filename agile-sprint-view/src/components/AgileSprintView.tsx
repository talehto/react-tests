import React, { useState } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable } from '@dnd-kit/sortable';
import { KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import TaskCard from './TaskCard';
import { Task, TaskCategory } from '../types';

const initialTasks: Task[] = [
  { id: '1', title: 'Task 1', description: "task 1 description", category: 'To Do' },
  { id: '2', title: 'Task 2', description: "task 2 description", category: 'In Progress' },
  { id: '3', title: 'Task 3', description: "task 3 description", category: 'Done' },
  { id: '4', title: 'Task 4', description: "task 4 description", category: 'To Do' },
];

const AgileSprintView: React.FC = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const onDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      setTasks((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);

        const updatedItems = arrayMove(items, oldIndex, newIndex);

        // Update the category of the moved task
        const movedTask = updatedItems[newIndex];
        const newCategory = over.data.current.sortable.containerId;
        movedTask.category = newCategory as TaskCategory;

        return updatedItems;
      });
    }
  };

  const getTasksByCategory = (category: TaskCategory) => {
    return tasks.filter(task => task.category === category);
  };

  return (
    <Container>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <Grid container spacing={3}>
          {['To Do', 'In Progress', 'Done'].map(category => (
            <Grid item xs={4} key={category}>
              <Paper elevation={3} style={{ padding: '16px' }}>
                <Typography variant="h6" gutterBottom>
                  {category.replace('-', ' ').toUpperCase()}
                </Typography>
                <SortableContext items={getTasksByCategory(category as TaskCategory).map(task => task.id)} id={category}>
                  {getTasksByCategory(category as TaskCategory).map((task, index) => (
                    <SortableTask key={task.id} task={task} />
                  ))}
                </SortableContext>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </DndContext>
    </Container>
  );
};

interface SortableTaskProps {
  task: Task;
}

const SortableTask: React.FC<SortableTaskProps> = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginBottom: '8px',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <TaskCard task={task} />
    </div>
  );
};

export default AgileSprintView;