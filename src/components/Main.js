import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import classnames from 'classnames';
import { Tabs, Tab, Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import BookIcon from '@material-ui/icons/Book';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ScrollPosition from '../ScrollPosition.js';
import useWebAnimations, { headShake, pulse, flipInX } from '@wellyshen/use-web-animations';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FirstPage from './FirstPage.js';
import SecondPage from './SecondPage.js';
import ThirdPage from './ThirdPage.js';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerPaperDark: {
    width: drawerWidth,
    color: "white",
    backgroundColor: "black",
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function Main() {
  const classes = useStyles();

  const [ open, setOpen ] = useState(false);
  const [ value, setValue ] = useState(0);

  const [ clickedbtn1, setClickedbtn1 ] = useState(false);
  const [ clickedbtn2, setClickedbtn2 ] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const tabAnimation1 = useWebAnimations({ ...headShake });
  const tabAnimation2 = useWebAnimations({ ...headShake });
  const tabAnimation3 = useWebAnimations({ ...headShake });
  const tabAnimation4 = useWebAnimations({ ...headShake });

  const btnAnimation1 = useWebAnimations({ ...pulse });
  const btnAnimation2 = useWebAnimations({ ...pulse });

  const logoAnimation = useWebAnimations({ ...flipInX });

  const listAnimation1 = useWebAnimations({ ...flipInX });
  const listAnimation2 = useWebAnimations({ ...flipInX });
  const listAnimation3 = useWebAnimations({ ...flipInX });
  const listAnimation4 = useWebAnimations({ ...flipInX });
  const listAnimation5 = useWebAnimations({ ...flipInX });
  const listAnimation6 = useWebAnimations({ ...flipInX });

  const offmenuicon = useMediaQuery('(max-width:345px)');

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
         position="fixed"
         id="shade"
         className={
           classnames(
             "appbar",
             (ScrollPosition() > 80 ? "appbarScrolled" : null),
             clsx(classes.appBar, { [classes.appBarShift]: open }),
           )
         }
        >
        <Toolbar className="header">
          <IconButton
             color="inherit"
             aria-label="open drawer"
             onClick={offmenuicon ? null : handleDrawerOpen}
             edge="start"
             className={clsx(classes.menuButton, open && classes.hide)}
          >
             <MenuIcon/>
          </IconButton>

              <Typography variant="h6" noWrap className="header_title">
                  <Typography 
                     ref={logoAnimation.ref}
                     onMouseOver={() => logoAnimation.getAnimation().play()}
                  > 
                      <ul>
                         <li> N </li> <li> E </li> <li> A </li> <li> T </li>
                      </ul>
                  </Typography>
              </Typography>
    
              <div id="center">
                  <Tabs value={value} onChange={handleChange} className="header_tabs">
                      <Tab
                          id="tab1"
                          label="Home"
                          icon={<HomeIcon className="tab_icon"/>}
                          wrapped
                          className={classnames("tab", (value === 0 ? "selected" : null))}
                          ref={tabAnimation1.ref}
                          onMouseOver={() => tabAnimation1.getAnimation().play()}
                      />
                      <Tab
                          id="tab2"
                          label="About"
                          icon={<ImportContactsIcon className="tab_icon"/>}
                          wrapped
                          className={classnames("tab", (value === 1 ? "selected" : null))}
                          ref={tabAnimation2.ref}
                          onMouseOver={() => tabAnimation2.getAnimation().play()}
                      />
                      <Tab
                          id="tab3"
                          label="Blog"
                          icon={<BookIcon className="tab_icon"/>}
                          wrapped
                          className={classnames("tab", (value === 2 ? "selected" : null))}
                          ref={tabAnimation3.ref}
                          onMouseOver={() => tabAnimation3.getAnimation().play()}
                      />
                      <Tab
                          id="tab4"
                          label="Jobs"
                          icon={<PermContactCalendarIcon className="tab_icon"/>}
                          wrapped
                          className={classnames("tab", (value === 3 ? "selected" : null))}
                          ref={tabAnimation4.ref}
                          onMouseOver={() => tabAnimation4.getAnimation().play()}
                      />
                  </Tabs>
              </div>

              <>
                <Button
                    variant="outlined"
                    onClick={() => { setClickedbtn1(x => !x) }}
                    onBlur={() => { setClickedbtn1(false) }}
                    className={classnames("btn", (clickedbtn1 ? "selectedbtn" : "notselectedbtn"))}
                    ref={btnAnimation1.ref}
                    onMouseOver={() => btnAnimation1.getAnimation().play()}
                    id="hideon1070"
                > 
                    sign up
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => { setClickedbtn2(x => !x) }}
                    onBlur={() => { setClickedbtn2(false) }}
                    className={classnames("btn", (clickedbtn2 ? "selectedbtn" : "notselectedbtn"))}
                    ref={btnAnimation2.ref}
                    onMouseOver={() => btnAnimation2.getAnimation().play()}
                    id="hideon860"
                >
                    log in
                </Button>
              </>
        </Toolbar>
      </AppBar>

      <Drawer
         className={classes.drawer}
         variant="persistent"
         anchor="left"
         open={open}
         classes={ScrollPosition() > 80 ? { paper: classes.drawerPaperDark } : { paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                <MenuIcon style={ScrollPosition() > 80 ? { color: "white" } : null}/>
            </IconButton>
        </div>
        <Divider/>
        <List>
            <ListItem
               button
               ref={listAnimation1.ref}
               onMouseOver={() => listAnimation1.getAnimation().play()}
               onClick={() => listAnimation1.getAnimation().play()}
               className={ScrollPosition() > 80 ? "whitehover" : "blackhover"}
            >
                <ListItemIcon>
                    <HomeIcon style={ScrollPosition() > 80 ? { color: "white" } : null}/>
                </ListItemIcon>
                <ListItemText primary={<span className="text"> HOME </span>}/>
            </ListItem>
            <ListItem
               button
               ref={listAnimation2.ref}
               onMouseOver={() => listAnimation2.getAnimation().play()}
               onClick={() => listAnimation2.getAnimation().play()}
               className={ScrollPosition() > 80 ? "whitehover" : "blackhover"}
            >
                <ListItemIcon>
                    <ImportContactsIcon style={ScrollPosition() > 80 ? { color: "white" } : null}/>
                </ListItemIcon>
                <ListItemText primary={<span className="text"> CONTACT </span>}/>
            </ListItem>

            <ListItem
               button
               ref={listAnimation3.ref}
               onMouseOver={() => listAnimation3.getAnimation().play()}
               onClick={() => listAnimation3.getAnimation().play()}
               className={ScrollPosition() > 80 ? "whitehover" : "blackhover"}
            >
                <ListItemIcon>
                    <BookIcon style={ScrollPosition() > 80 ? { color: "white" } : null}/>
                </ListItemIcon>
                <ListItemText primary={<span className="text"> BLOG </span>}/>
            </ListItem>

            <ListItem
               button
               ref={listAnimation4.ref}
               onMouseOver={() => listAnimation4.getAnimation().play()}
               onClick={() => listAnimation4.getAnimation().play()}
               className={ScrollPosition() > 80 ? "whitehover" : "blackhover"}
            >
                <ListItemIcon>
                    <PermContactCalendarIcon style={ScrollPosition() > 80 ? { color: "white" } : null}/>
                </ListItemIcon>
                <ListItemText primary={<span className="text"> JOBS </span>}/>
            </ListItem>
        </List>
        <Divider/>
        <List>
            <ListItem
               button
               ref={listAnimation5.ref}
               onMouseOver={() => listAnimation5.getAnimation().play()}
               className={ScrollPosition() > 80 ? "whitehover" : "blackhover"}
            >
                <ListItemIcon>
                    <MailIcon style={ScrollPosition() > 80 ? { color: "white" } : null}/>
                </ListItemIcon>
                <ListItemText primary={<span className="text"> Sign Up </span>}/>
            </ListItem>
            <ListItem
               button
               ref={listAnimation6.ref}
               onMouseOver={() => listAnimation6.getAnimation().play()}
               className={ScrollPosition() > 80 ? "whitehover" : "blackhover"}
            >
                <ListItemIcon>
                    <InboxIcon style={ScrollPosition() > 80 ? { color: "white" } : null}/>
                </ListItemIcon>
                <ListItemText primary={<span className="text"> Log In </span>}/>
            </ListItem>
        </List>
      </Drawer>

      <main
         className={clsx(classes.content, {
           [classes.contentShift]: open,
         })}
      >
        <div className={classes.drawerHeader} />


        <FirstPage/>
        <SecondPage/>
        <ThirdPage/>


      </main>
    </div>
  )
}

export default Main;