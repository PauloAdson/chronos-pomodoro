import { TaskModel } from '../models/TaskModel';

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
  if (currentCycle % 8 === 0) return 'longBreakTime';
  if (currentCycle % 2 === 0) return 'shortBreakTime';
  // O que não for 'longBreakTime', 'shortBreakTime', retorna 'worktime'
  return 'workTime';
}
