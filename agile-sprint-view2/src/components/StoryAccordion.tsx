import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Card, CardContent, Stack, IconButton, Menu, MenuItem, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {DndContext} from '@dnd-kit/core';
//import SwimlaneItemBackground from './SwimlaneItemBackground';
import SwimlaneDroppableBackground from './SwimlaneDroppableBackground';
import AddItemDialog from './AddItemDialog';
import TaskCard from './TaskCard';

interface StoryAccordionProps {
  story: string;
  index: number;
}
interface TaskDict {
  [key: string]: string[];
}

const StoryAccordion: React.FC<StoryAccordionProps> = ({ story, index }) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const [openAddTaskDialog, setOpenAddTaskDialog] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [expandAccordionDetails, setExpandAccordionDetails] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskDict>({});

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    // This prevents the opening a AccorionSummary when clicking on the menu.
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleAddTaskButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setOpenAddTaskDialog(true);
  };
  
  const handleCloseTaskButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    addTask('Todo', taskTitle);
    setOpenAddTaskDialog(false);
    handleMenuClose(event);
    setTaskTitle('');
    // Expand the AccordionDetails when the dialog is closed
    setExpandAccordionDetails(true);
  };

  const handleCancelTaskButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setTaskTitle('');
    handleMenuClose(event);
    setOpenAddTaskDialog(false);
  };

  const handleTaskTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleAccordionChange = (_: React.ChangeEvent<{}>, expanded: boolean) => {
    setExpandAccordionDetails(expanded);
  };

  const addTask = (key: string, taskTitle: string) => {
    setTasks(prevTasks => ({
      ...prevTasks,
      [key]: prevTasks[key] ? [...prevTasks[key], taskTitle] : [taskTitle]
    }));
  };

  const getTasksByKey = (key: string): string[] => {
    return tasks[key] || [];
  };

  return (
    <Accordion 
      key={index}
      expanded={expandAccordionDetails}
      onChange={handleAccordionChange}
      sx={{ 
            mt: 2, 
            borderRadius: 2, 
            bgcolor: 'transparent', 
            border: '1px solid',
            borderColor: 'primary.main'
          }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id={`story-${index}`}
        sx={{ 
              bgcolor: 'primary.main', 
              borderColor: 'primary.main',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
      >
        <Typography component="span">{story}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          aria-label="more"
          aria-controls={`menu-${index}`}
          aria-haspopup="true"
          onClick={handleMenuClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id={`menu-${index}`}
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleAddTaskButtonClick}>Create task</MenuItem>
          <MenuItem onClick={handleMenuClose}>Delete story</MenuItem>
        </Menu>
      </AccordionSummary>
      <AccordionDetails sx={{ 
                              border: '1px solid', 
                              borderColor: 'primary.main',
                              position: 'relative' 
                            }}>
        <DndContext>
          <Stack
            direction="row"
            spacing={2}
            flexWrap="nowrap"
          >
            <SwimlaneDroppableBackground id='Todo'>
              {getTasksByKey('Todo').map((content, idx) => (
                <TaskCard key={idx} content={content} /> 
              ))}
            </SwimlaneDroppableBackground>
            <SwimlaneDroppableBackground id='InProgress'>
              {getTasksByKey('InProgress').map((content, idx) => (
                <TaskCard key={idx} content={content} /> 
              ))}
            </SwimlaneDroppableBackground>
            <SwimlaneDroppableBackground id='Done'>
              {getTasksByKey('Done').map((content, idx) => (
                <TaskCard key={idx} content={content} />
              ))}
            </SwimlaneDroppableBackground>
          </Stack>
        </DndContext>
      </AccordionDetails>
      <AddItemDialog
        openAddItemDialog={openAddTaskDialog}
        itemType='Task'
        onClose={handleCloseTaskButtonClick}
        onCancel={handleCancelTaskButtonClick}
        onStoryTitleChange={handleTaskTitleChange}
        storyTitle={taskTitle}
      />
    </Accordion>
  );
};

export default StoryAccordion;
