import { Button } from '@mui/material';
import { Auth } from 'aws-amplify';
import React from 'react';

const GoOut = () => {
  const signOut = () => {
    try {
      Auth.signOut();
    } catch (error) {
      console.log('Signout error', error);
    }
  };
  return (
    <Button variant="contained" color="error" onClick={signOut}> 
      Logout
    </Button>
  );
};
export default GoOut;
