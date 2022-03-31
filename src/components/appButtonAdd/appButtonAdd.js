import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        Publier une annonce
      </Button>
    </Stack>
  );
}
