import { Grid, makeStyles } from '@material-ui/core';
import React, { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}
const useStyles = makeStyles(() => ({
  background: {
    display: 'flex',
    height: '80vh',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    background: `url("./header-Image.jpg")`,
  },
}));

export default function BackgroundImage(props: Props): ReactElement {
  const theme = useStyles();
  return (
    <Grid direction="column" alignItems="center" justify="center" container xs className={theme.background}>
      {props.children}
    </Grid>
  );
}
