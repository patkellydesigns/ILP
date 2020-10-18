import { makeStyles } from '@material-ui/core/styles';
import { Layout } from 'components/Layout';
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

  background: {
    top: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    paddingTop: '10%',
    backgroundColor: '#1d1d1d',
    zIndex: -1,
    backgroundImage: "url('./header-image.jpg')",
    backgroundSize: 'cover',
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
        <Stage cta="iLikePlastic" image="./header-image.jpg" />
      </div>
    </Layout>
  );
};
export default Home;
