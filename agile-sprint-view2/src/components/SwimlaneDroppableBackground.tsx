import React from 'react';
import {useDroppable} from '@dnd-kit/core';
import {  Box } from '@mui/material';
//import { CSS } from '@dnd-kit/utilities';
import SwimlaneItemBackground from './SwimlaneItemBackground';

interface SwimlaneDroppableBackgroundProps {
  id: string;
  children?: React.ReactNode;
}

const SwimlaneDroppableBackground: React.FC<SwimlaneDroppableBackgroundProps> = ({ id, children }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <Box ref={setNodeRef} sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <SwimlaneItemBackground>
        {children}
      </SwimlaneItemBackground>
    </Box>
  );
};

export default SwimlaneDroppableBackground;
