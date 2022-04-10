export type ScheduledDate = Date | null;

export type Task = {
  id: string;
  content: string;
  scheduled_date: ScheduledDate;
  isDone: boolean;
};
