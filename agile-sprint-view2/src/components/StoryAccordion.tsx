import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Card, CardContent, Paper, Stack, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

interface StoryAccordionProps {
  story: string;
  index: number;
}

const SwimlaneItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.column_background.default,
  flex: 1,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
          //sx={{ zIndex: 1 }}
        >
          <SwimlaneItem>
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
          </SwimlaneItem>
          <SwimlaneItem>
            <Card sx={{ mt: 1 }}>
              <CardContent sx={{ bgcolor: 'background.default', border: '1px solid', borderColor: 'primary.main' }}>
                <Typography variant="body2" color="text.secondary">
                  This is the content of the card inside the accordion {story}.
                </Typography>
              </CardContent>
            </Card>
          </SwimlaneItem>
          <SwimlaneItem />
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default StoryAccordion;
