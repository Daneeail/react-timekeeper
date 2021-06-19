import React from 'react';
import { ScheduleInterface } from '../Contexts/ScheduleContexts';
import { Schedule } from '../Models/Schedule';

export const useSchedule = (): ScheduleInterface =>  {
  const [schedules, setSchedules] = React.useState<Schedule[]>([]);

  function addSchedule(newSchedule: Schedule) {
    setSchedules((oldScheduleArray: any) => [...oldScheduleArray, newSchedule]);
  }

  return {
    schedules,
    addSchedule
  }
}