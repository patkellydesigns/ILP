import { makeStyles } from '@material-ui/core/styles';
import CTA from 'components/cta';
import { Layout } from 'components/Layout/layout';
import Head from 'next/head';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    height: 'calc(100vh - 64px)',
    position: 'relative',
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
        <CTA />
      </div>
    </Layout>
  );
};
export default Home;
