import { Button } from '@material-ui/core';
import React from 'react';
import { useAuth } from 'use-auth0';

interface Props {
  label: string;
}

export default function AuthButton(props: Props) {
  const { label } = props;
  const { login } = useAuth();
  const button = (
    <Button variant="contained" color="primary" onClick={login}>
      {label}
    </Button>
  );

  return button;
}
