import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { CssBaseline, ThemeProvider, Container, Stack, Chip } from '@mui/material';
import { theme } from './theme';
import CustomAppBar from './components/CustomAppBar';
import BackgroundColumn from './components/BackgroundColumn';
import SwimlaneHeader from './components/SwimlaneHeader';
import StoryDialog from './components/StoryDialog';
import StoryAccordion from './components/StoryAccordion';

const App: React.FC = () => {

  const [openAddStoryDialog, setOpenAddStoryDialog] = useState(false);
  const [storyTitle, setStoryTitle] = useState('');
  const [stories, setStories] = useState<string[]>([]);

  const handleAddStoryButtonClick = () => {
    setOpenAddStoryDialog(true);
  };
  
  const handleCloseStoryButtonClick = () => {
    setStories([...stories, storyTitle]);
    setOpenAddStoryDialog(false);
    setStoryTitle('');
  };

  const handleCancelStoryButtonClick = () => {
    setStoryTitle('');
    setOpenAddStoryDialog(false);
  };

  const handleStoryTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStoryTitle(event.target.value);
  };

  const columns = [
    { title: "Todo", size: { xs: 4, md: 4 } },
    { title: "In Progress", size: { xs: 4, md: 4 } },
    { title: "Done", size: { xs: 4, md: 4 } }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false}>
        <CustomAppBar title="Kanban board" sx={{ display: 'flex', flexDirection: 'column', mt: 2 }} onButtonClick={handleAddStoryButtonClick} />
        <Container maxWidth={false} sx={{ mt: 2 }}>
          <SwimlaneHeader />
        </Container>        
      </Container>
      <StoryDialog
        openAddStoryDialog={openAddStoryDialog}
        onClose={handleCloseStoryButtonClick}
        onCancel={handleCancelStoryButtonClick}
        onStoryTitleChange={handleStoryTitleChange}
        storyTitle={storyTitle}
      />
    </ThemeProvider>
  );
}

export default App;
