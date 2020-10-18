import { Button, createStyles, Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      background: theme.palette.background.paper,
    },
  }),
);
interface Props {
  title: string;
  links: string[];
}

const FooterWidget = (props: Props) => {
  const { title, links } = props;
  const classes = useStyles();
  return (
    <Grid item xs>
      <Paper className={classes.paper}>
        <h3> {title}</h3>
        {links &&
          links.map(f => (
            <Button variant="text" key={f}>
              {f}
            </Button>
          ))}
      </Paper>
    </Grid>
  );
};

export default FooterWidget;
