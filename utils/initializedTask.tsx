import { Task } from "../src/types/task";

export const initializedTask = (id: string): Task => {
  return { id, content: "", isDone: false };
};
