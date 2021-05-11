import { v4 as uuidv4 } from 'uuid';

export class Task {
  id: string;
  name: string;
  description: string;
  notes: string;
  scheduleId: string;
  startDt: Date;
  endDt?: Date;
  dayIndex: number;

  constructor(scheduleId: string) {
    this.id = uuidv4();
    this.name = 'Task';
    this.description = '';
    this.notes = '';
    this.scheduleId = scheduleId;
    this.startDt = new Date();
    this.endDt = undefined;
    this.dayIndex = 0;
  }
}
