import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

interface AddItemDialogProps {
  openAddItemDialog: boolean;
  itemType: string;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
  onCancel: (event: React.MouseEvent<HTMLElement>) => void;
  onStoryTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  storyTitle: string;
}

const AddItemDialog: React.FC<AddItemDialogProps> = ({ openAddItemDialog, itemType, onClose, onCancel, onStoryTitleChange, storyTitle }) => {
  const handleClose = () => {
    onCancel();
  };

  return (
    <Dialog
      sx={{ borderRadius: 2 }}
      open={openAddItemDialog}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle sx={{ borderRadius: 2, margin: 1, bgcolor: 'secondary.main' }}>{`Add ${itemType}`}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label={`${itemType} title`}
          type="text"
          fullWidth
          variant="outlined"
          value={storyTitle}
          onChange={onStoryTitleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ color: "text.primary" }}>
          Close
        </Button>
        <Button onClick={onCancel} sx={{ color: "text.primary" }}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddItemDialog;
