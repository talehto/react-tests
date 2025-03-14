import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface StoryAccordionProps {
  story: string;
  index: number;
}

const StoryAccordion: React.FC<StoryAccordionProps> = ({ story, index }) => {
  return (
    <Accordion 
      key={index}
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
              borderColor: 'primary.main' 
            }}
      >
        <Typography component="span">{story}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ 
                              border: '1px solid', 
                              borderColor: 'primary.main' 
                            }}>
        {/* <Grid size="{ xs: 4, md: 4 }" sx={{ display: 'flex', flexDirection: 'column', pl: 2, pr: 2, pt: 2, pb: 2 }}> */}
          <Card sx={{ width: '28%' }}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This is the content of the card inside the accordion {story}.
              </Typography>
            </CardContent>
          </Card>
        {/* </Grid> */}
      </AccordionDetails>
    </Accordion>
  );
};

export default StoryAccordion;
