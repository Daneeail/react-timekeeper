import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Containers/Login/Login";
import TimeCard from "./Containers/TimeCard/TimeCard";
import ScheduleContext from './Contexts/ScheduleContexts';
import { useSchedule } from './Hooks/Schedule.hook';

const App = () => {
  const schedules = useSchedule();

  return (
    <Router>
      <Switch>
        <Route path="/time-card">
          <ScheduleContext.Provider value={schedules}>
            <TimeCard />
          </ScheduleContext.Provider>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
