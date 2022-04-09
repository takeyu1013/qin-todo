export type Task = {
  id: string;
  content: string;
  scheduled_date: Date | null;
  isDone: boolean;
};
