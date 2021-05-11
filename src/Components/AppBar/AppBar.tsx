import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ScheduleIcon from '@material-ui/icons/Schedule';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { DateTime } from 'luxon';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    title: {
      fontWeight: "bold",
      display: "inline"
    },
    leftSpacing: {
      flexGrow: 1
    },
    centerSpacing: {
      display: "inline-flex",
      justifyContent: "center",
      flexGrow: 1
    },
    rightSpacing: {
      display: "inline-flex",
      justifyContent: "flex-end",
      flexGrow: 1
    }
  }),
);

const AppBarComponent = (props: any) => {
  const [open, setOpen] = props.open;
  const [currentTime, setCurrentTime] = React.useState(DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS));
  const classes = useStyles();

  useEffect(() => {
    const clock = setInterval(() => {
      setCurrentTime(DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS))
    }, 1000);

    return () => clearInterval(clock);
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  return (
    <AppBar
        position="absolute"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <div className={classes.leftSpacing}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          
            <Typography variant="h6" noWrap className={classes.title}>
              Timekeeper
            </Typography>
            <ScheduleIcon className="ml-3"></ScheduleIcon>
          </div>
          <div className={classes.centerSpacing}>
            {currentTime}
          </div>
          <div className={classes.rightSpacing}>
            Sign Out
          </div>
        </Toolbar>
      </AppBar>
  )
}

export default AppBarComponent;