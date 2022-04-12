import { Task } from "../src/types/task";

export const initializedTask = ({
  id,
  scheduled_date,
}: Pick<Task, "id" | "scheduled_date">): Task => {
  return { id, content: "", scheduled_date, is_done: false, done_at: null };
};
