import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, useTheme } from '@mui/material';

interface AddItemDialogProps {
  openAddItemDialog: boolean;
  itemType: string;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
  onCancel: (event: React.MouseEvent<HTMLElement>) => void;
  onStoryTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  storyTitle: string;
}

const AddItemDialog: React.FC<AddItemDialogProps> = ({ openAddItemDialog, itemType, onClose, onCancel, onStoryTitleChange, storyTitle }) => {
  const theme = useTheme();

  return (
    <Dialog
      sx={{ borderRadius: 2 }}
      open={openAddItemDialog}
      onClose={onCancel}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle sx={{ boxShadow: `0 0 0 14px ${theme.palette.background.default}`, borderRadius: 2, margin: 1, bgcolor: 'secondary.main' }}>{`Add ${itemType}`}</DialogTitle>
      {/* <DialogTitle sx={{ border: '2px solid red', borderRadius: 2, margin: 1, bgcolor: 'secondary.main' }}>{`Add ${itemType}`}</DialogTitle> */}
      <DialogContent sx={{ bgcolor: 'background.default' }}>
        <TextField
          sx={{
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: 'secondary.main', // Change border color on hover
              },
            },
          }}
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
      <DialogActions sx={{ bgcolor: 'background.default' }}>
        <Button onClick={onClose} sx={{ color: "text.primary", bgcolor: 'secondary.main' }}>
          Add
        </Button>
        <Button onClick={onCancel} sx={{ color: "text.primary", bgcolor: 'secondary.main' }}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddItemDialog;
