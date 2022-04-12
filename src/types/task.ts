export type ScheduledDate = Date | null;
type DoneAt = Date | null;

export type Task = {
  id: string;
  content: string;
  scheduled_date: ScheduledDate;
  is_done: boolean;
  done_at: DoneAt;
};
