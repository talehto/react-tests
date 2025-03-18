import React from 'react';
import { Stack } from '@mui/material';
import SwimlaneItemBackground from './SwimlaneItemBackground';

const SwimlaneHeader: React.FC = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      flexWrap="nowrap"
      sx={{pl: 2, pr: 2 }}
    >
      <SwimlaneItemBackground>Todo</SwimlaneItemBackground>
      <SwimlaneItemBackground>In progress</SwimlaneItemBackground>
      <SwimlaneItemBackground>Done</SwimlaneItemBackground>
    </Stack>
  );
};

export default SwimlaneHeader;
