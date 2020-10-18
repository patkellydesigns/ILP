import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import AuthButton from './auth-button';

interface Props {
  cta: string;
}

const CTA = (props: Props) => {
  const { cta } = props;
  return (
    <Grid item xs>
      <Typography variant="h2" gutterBottom>
        {cta}
      </Typography>
      <AuthButton label="Sign in" />
    </Grid>
  );
};

export default CTA;
