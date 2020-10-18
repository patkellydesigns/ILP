import { Card, Grid } from '@material-ui/core';
import React from 'react';

interface Props {
  message: string;
}

export const BRB = (props: Props) => {
  const { message } = props;
  return (
    <Grid container xs>
      <Grid item xs>
        <Card>
          <h2>{message}</h2>
        </Card>
      </Grid>
    </Grid>
  );
};
