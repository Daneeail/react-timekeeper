import React from "react";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import AppBarComponent from "../../Components/AppBar/AppBar";
import DrawerComponent from "../../Components/Drawer/Drawer";
import ElapsedTimeDisplay from "../../Components/ElapsedTimeDisplay/ElapsedTimeDisplay";
import DayTimeCard from "../../Components/DayTimeCard/DayTimeCard";


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
);

const TimeCard = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { path } = useRouteMatch();

  return (
    <div>
      <div className={classes.root}>
        <AppBarComponent open={[open, setOpen]} />
        <DrawerComponent open={[open, setOpen]} />

        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <ElapsedTimeDisplay />

          <Switch>
            <Route path={path}>
              <DayTimeCard />
            </Route>
            <Route path={`${path}/day`}>
              <DayTimeCard />
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default TimeCard;
