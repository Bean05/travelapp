import React from 'react';
import { Button } from '@mui/material';
import ChangeUserAccountModal from '../ChangeCardModal/ChangeUserAccount';

export default function EditButton() {
  return (
    <Button color="secondary">
      <ChangeUserAccountModal />
    </Button>
  );
}
