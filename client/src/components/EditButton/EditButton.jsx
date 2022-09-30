import React from 'react';
import { Button } from '@mui/material';

export default function EditButton() {
  return (
    <Button
      variant="contained"
      onClick={() => dispatch(changeInfo(id))}
      style={{
        width: '35px', height: '25px', fontSize: '50%',
      }}
    >
      Изменить
    </Button>
  );
}
