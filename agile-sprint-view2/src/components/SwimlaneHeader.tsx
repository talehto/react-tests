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
}));

const SwimlaneHeader: React.FC = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      flexWrap="nowrap"
      sx={{pl: 2, pr: 2 }}
    >
      <SwimlaneItem>Todo</SwimlaneItem>
      <SwimlaneItem>In progress</SwimlaneItem>
      <SwimlaneItem>Done</SwimlaneItem>
    </Stack>
  );
};

export default SwimlaneHeader;
