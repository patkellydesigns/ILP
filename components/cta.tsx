import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import AuthButton from './auth-button';
import BackgroundImage from './background-image';
const useStyles = makeStyles(() => ({
  cta: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
  },
}));
const CTA = () => {
  const classes = useStyles();
  return (
    <BackgroundImage>
      <div className={classes.cta}>
        <Typography variant="h2" gutterBottom>
          iLikePLastic
        </Typography>
        <AuthButton label="Sign in" />
      </div>
    </BackgroundImage>
  );
};

export default CTA;
