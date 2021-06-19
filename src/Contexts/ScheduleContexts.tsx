import React from "react";
import { Schedule } from "../Models/Schedule";

export interface ScheduleInterface {
  schedules: Schedule[];
  addSchedule: (currentSchedule: Schedule) => void;
}

export const SCHEDULE_DEFAULT_VALUE = {
  schedules: [],
  addSchedule: () => { }
}

const ScheduleContext = React.createContext<ScheduleInterface>(SCHEDULE_DEFAULT_VALUE);

export default ScheduleContext;
