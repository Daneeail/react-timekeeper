import { v4 as uuidv4 } from 'uuid';
import { Task } from '../Models/Task';

export class Schedule {
  id: string;
  name: string;
  description: string;
  notes: string;
  userId: string;
  tasks: Task[];
  startDt?: Date;
  endDt?: Date;
  dayIndex: number;

  constructor() {
    this.id = uuidv4();
    this.name = '';
    this.description = '';
    this.notes = '';
    this.userId = '';
    this.tasks = [];
    this.startDt = undefined;
    this.endDt = undefined;
    this.dayIndex = 0;
  }
}