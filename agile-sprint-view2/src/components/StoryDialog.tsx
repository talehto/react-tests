import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import theme from '../theme';

interface StoryDialogProps {
  openAddStoryDialog: boolean;
  onClose: () => void;
  onCancel: () => void;
  onStoryTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  storyTitle: string;
}

const StoryDialog: React.FC<StoryDialogProps> = ({ openAddStoryDialog, onClose, onCancel, onStoryTitleChange, storyTitle }) => {
  const handleClose = () => {
    onCancel();
  };

  return (
    <Dialog
      sx={{ borderRadius: 2 }}
      open={openAddStoryDialog}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle sx={{ borderRadius: 2, margin: 1, bgcolor: 'secondary.main' }}>{"Add Story"}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Story Title"
          type="text"
          fullWidth
          variant="outlined"
          value={storyTitle}
          onChange={onStoryTitleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ color: theme.palette.text.primary }}>
          Close
        </Button>
        <Button onClick={onCancel} sx={{ color: theme.palette.text.primary }}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default StoryDialog;
