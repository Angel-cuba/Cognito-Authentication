import { Button } from '@mui/material';
import { Auth } from 'aws-amplify';
import React from 'react';

const GoOut = () => (
  <Button variant="contained" color="error" onClick={() => Auth.signOut()}>
    Logout
  </Button>
);

export default GoOut;
