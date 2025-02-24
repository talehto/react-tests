import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import { Task, TaskCategory } from '../types';

interface DragAndDropProps {
  tasks: Task[];
  categories: TaskCategory[];
  onTaskMove: (taskId: string, destinationCategoryId: string) => void;
}

const DragAndDrop: React.FC<DragAndDropProps> = ({ tasks, categories, onTaskMove }) => {
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);

  const handleDragEnd = (result: any) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId !== source.droppableId) {
      onTaskMove(result.draggableId, destination.droppableId);
    }
    setDraggedTaskId(null);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {categories.map((category) => (
        <Droppable key={category.id} droppableId={category.id}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ margin: '8px', padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}
            >
              <h3>{category.name}</h3>
              {tasks
                .filter(task => task.categoryId === category.id)
                .map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TaskCard task={task} />
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
};

export default DragAndDrop;