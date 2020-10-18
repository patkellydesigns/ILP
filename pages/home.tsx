import { makeStyles } from '@material-ui/core/styles';
import { Layout } from 'components/Layout/layout';
import Stage from 'components/stage';
import Head from 'next/head';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStyles = makeStyles((theme: any) => ({
  root: {
    textAlign: 'center',
    height: 'calc(100vh - 64px)',
    position: 'relative',
  },

  chipContainer: {
    padding: '6px',
    display: 'flex',
    justifyContent: 'center',
  },
  chip: {
    margin: '5px 10px',
    color: theme.palette.primary.text,
    backgroundColor: theme.palette.primary.main,
  },
  strip: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(20),
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        {/* <div className={classes.background} /> */}
        <Head>
          <title>iLikePlastic</title>
        </Head>
        <Stage />
      </div>
    </Layout>
  );
};
export default Home;
