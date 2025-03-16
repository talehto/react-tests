import React, { useState } from 'react';
import { CssBaseline, ThemeProvider, Container } from '@mui/material';
import { theme } from './theme';
import CustomAppBar from './components/CustomAppBar';
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false}>
        <CustomAppBar title="Kanban board" sx={{ display: 'flex', flexDirection: 'column', mt: 2 }} onButtonClick={handleAddStoryButtonClick} />
        <Container maxWidth={false} sx={{ mt: 2 }}>
          <SwimlaneHeader />
          {stories.map((story, index) => (
              <StoryAccordion key={index} story={story} index={index} />
            ))}
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
