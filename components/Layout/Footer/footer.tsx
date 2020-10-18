import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import FooterWidget from './footer-widget';

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

export function Footer() {
  const classes = useStyles();

  const footerWork = ['Careers', 'LinkedIn', 'Upload Resume'];
  const footerSocial = ['Instagram', 'FAcebook', 'Twitter'];
  const footerContact = ['WhatsApp', 'Messenger', 'Email'];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <FooterWidget title="Contact us" links={footerContact} />
        <FooterWidget title="Social" links={footerSocial} />
        <FooterWidget title="Work with us" links={footerWork} />
      </Grid>
    </div>
  );
}
