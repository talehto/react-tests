import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Card, CardContent, Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SwimlaneItemBackground from './SwimlaneItemBackground';

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
    </Accordion>
  );
};

export default StoryAccordion;
