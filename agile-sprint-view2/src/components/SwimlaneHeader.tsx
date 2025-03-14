import React from 'react';
import { Stack, Chip } from '@mui/material';
import { theme } from '../theme';

const SwimlaneHeader: React.FC = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      flexWrap="nowrap"
    >
      <Chip label="Todo" sx={{ backgroundColor: theme.palette.primary.main, flex: 1 }} />
      <Chip label="In progress" sx={{ backgroundColor: theme.palette.primary.main, flex: 1 }} />
      <Chip label="Done" sx={{ backgroundColor: theme.palette.primary.main, flex: 1 }} />
    </Stack>
  );
};

export default SwimlaneHeader;
