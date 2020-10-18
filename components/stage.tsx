import { Button, Grid, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { ReactElement } from 'react';
import { useAuth } from 'use-auth0';

interface Props {
  image: string;
  cta: string;
}
const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    height: 'calc(100vh - 64px)',
    position: 'relative',
  },

  background: {
    top: 0,
    position: 'absolute',
    width: '100%',
    minWidth: '320px',
    height: '100%',
    maxHeight: '500px',
    paddingTop: '20%',
    backgroundColor: '#1d1d1d',
    zIndex: 0,
    backgroundImage: "url('./header-Image.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  },
}));

export default function Stage({ cta }: Props): ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.background}>
        <Grid alignContent="space-around" container alignItems="center" xs>
          <Grid xs>
            <Typography variant="h2" gutterBottom>
              {cta}
            </Typography>
            <AuthButton />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export function AuthButton() {
  const { login } = useAuth();
  const button = (
    <Button color="primary" variant="outlined" onClick={login}>
      Sign in
    </Button>
  );

  return button;
}
