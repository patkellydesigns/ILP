import { Card } from '@material-ui/core';
import React from 'react';
import { useAuth } from 'use-auth0';
// eslint-disable-next-line @typescript-eslint/no-empty-interface

export const Profile = () => {
  const { user, isAuthenticated, isAuthenticating } = useAuth();

  if (isAuthenticating) {
    return <div>Loading ...</div>;
  } else if (user && isAuthenticated) {
    return (
      <Card>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </Card>
    );
  } else return <h2>Handle this</h2>;
};
