import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { CssBaseline, ThemeProvider, Accordion, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from './theme';
import CustomAppBar from './components/CustomAppBar';
import BackgroundColumn from './components/BackgroundColumn';
import StoryDialog from './components/StoryDialog';

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
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: "100vw", height: "100vh", bgcolor: 'background.default' }}>
      <CustomAppBar title="Kanban board" sx={{ mt: 2, mx: 2, width: "calc(100% - 32px)" }} onButtonClick={handleAddStoryButtonClick} />
      {/* See doc for a "margin: auto" in below Grig component. https://dev.to/ritikaagrawal08/all-about-margin-auto-in-css-centering-and-more-2b2g */}
        {/* <Grid container sx={{ width: "70vw", height: "100vh", flexGrow: 1, margin: 'auto'}}> */}
        <Box sx={{ position: 'relative', flexGrow: 1, width: "70vw", height: "100vh", margin: 'auto' }}>
          <Grid container sx={{ width: "70vw", height: "85vh", flexGrow: 1, margin: 'auto', zIndex: 1 }}>
          {columns.map((column, index) => (
              <BackgroundColumn
                key={index}
                title={column.title}
                size={column.size}
                grid_sx_args={{ pl: 2, pr: 2, pt: 2, pb: 2 }}
                card_sx_args={{ mt: 2 }}
              />
            ))}
          </Grid>
          <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 2, mt: 10 }}>
            {stories.map((story, index) => (
              <Accordion sx={{ mt: 2, borderRadius: 2, bgcolor: 'primary.main' }} key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id={`story-${index}`}
              >
                <Typography component="span">{story}</Typography>
              </AccordionSummary>
            </Accordion>
            ))}
          </Box>
        </Box>
      </Box>
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
