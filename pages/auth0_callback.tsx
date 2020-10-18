import { makeStyles } from '@material-ui/core/styles';
import { Profile } from 'components/profile';
import React, { useEffect } from 'react';
import { useAuth } from 'use-auth0';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    height: '100vh',
  },
}));
const Auth0CallbackPage = () => {
  const { handleAuthentication } = useAuth();
  useEffect(() => {
    handleAuthentication();
  });
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>Welcome</div>
      <Profile />
    </div>
  );
};

export default Auth0CallbackPage;
