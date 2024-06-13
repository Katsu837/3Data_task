import React from 'react';
import { Paper, Stack } from '@mui/material';
import AuthForm from '@/components/AuthForm';

function AuthTemplates() {
  return (
    <Stack variant="fullPage">
      <Paper>
        <AuthForm />
      </Paper>
    </Stack>
  );
}

export default AuthTemplates;
