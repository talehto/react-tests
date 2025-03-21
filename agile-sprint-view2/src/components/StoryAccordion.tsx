import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Card, CardContent, Stack, IconButton, Menu, MenuItem, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SwimlaneItemBackground from './SwimlaneItemBackground';
import AddItemDialog from './AddItemDialog';

interface StoryAccordionProps {
  story: string;
  index: number;
}

const StoryAccordion: React.FC<StoryAccordionProps> = ({ story, index }) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const [openAddTaskDialog, setOpenAddTaskDialog] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [expandAccordionDetails, setExpandAccordionDetails] = useState<boolean>(false);

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
    //setStories([...stories, storyTitle]);
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
        <Stack
          direction="row"
          spacing={2}
          flexWrap="nowrap"
        >
          <SwimlaneItemBackground>
            <Card sx={{ mt: 1 }}>
              <CardContent sx={{ bgcolor: 'background.default', border: '1px solid', borderColor: 'primary.main' }}>
                <Typography variant="body2" color="text.secondary">
                  This is the content of the card inside the accordion {story}.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ mt: 1 }}>
              <CardContent sx={{ bgcolor: 'background.default', border: '1px solid', borderColor: 'primary.main' }}>
                <Typography variant="body2" color="text.secondary">
                  This is the content of the card inside the accordion {story}.
                </Typography>
              </CardContent>
            </Card>
          </SwimlaneItemBackground>
          <SwimlaneItemBackground>
            <Card sx={{ mt: 1 }}>
              <CardContent sx={{ bgcolor: 'background.default', border: '1px solid', borderColor: 'primary.main' }}>
                <Typography variant="body2" color="text.secondary">
                  This is the content of the card inside the accordion {story}.
                </Typography>
              </CardContent>
            </Card>
          </SwimlaneItemBackground>
          <SwimlaneItemBackground />
        </Stack>
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
