import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import AuthButton from './auth-button';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cta: any;
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
