import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { Footer } from './footer';
import { User } from './User';
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
      color: '#fff',
      appBar: {
        background: '#fff',
      },
    },
    avatar: {
      marginRight: theme.spacing(2),
    },
    appBar: {
      marginLeft: drawerWidth,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },

    toolbar: theme.mixins.toolbar,

    drawerPaper: {
      width: drawerWidth,
      backgroundColor: theme.palette.primary.main,
    },
    content: {
      flexGrow: 1,
    },
    menuItem: {
      color: '#fff',
    },
  }),
);

interface LayoutProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container?: Element;
}

export const Layout: React.FC<LayoutProps> = props => {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const logo = <Avatar className={classes.avatar} alt="iLikePLastic Logo" src="./logo.png" />;

  const drawer = (
    <div>
      <div className={classes.toolbar}> </div>
      <Divider />
      <List>
        {['Info'].map(text => (
          <ListItem button key={text} className={classes.menuItem}>
            <ListItemIcon className={classes.menuItem}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const appBar = (
    <AppBar
      position="fixed"
      style={{
        color: '#333',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        {logo}
        <Typography variant="h6" noWrap>
          iLikePlastic
        </Typography>
        <User />
      </Toolbar>
    </AppBar>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      {appBar}
      <nav aria-label="mailbox folders">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>

        <Hidden xsUp implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <Grid container spacing={3}>
        <Grid item xs>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {props.children}
          </main>

          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};
