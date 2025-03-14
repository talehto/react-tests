import React from 'react';
import { Stack, Chip, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const SwimlaneItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.column_background.default,
  flex: 1,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const SwimlaneHeader: React.FC = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      flexWrap="nowrap"
      sx={{pr: 6, pl: 6 }}
    >
      <SwimlaneItem>Todo</SwimlaneItem>
      <SwimlaneItem>In progress</SwimlaneItem>
      <SwimlaneItem>Done</SwimlaneItem>
      {/* <Chip label="Todo" sx={{ backgroundColor: theme.palette.primary.main, flex: 1 }} />
      <Chip label="In progress" sx={{ backgroundColor: theme.palette.primary.main, flex: 1 }} />
      <Chip label="Done" sx={{ backgroundColor: theme.palette.primary.main, flex: 1 }} /> */}
    </Stack>
  );
};

export default SwimlaneHeader;
