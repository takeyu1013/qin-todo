import { ChangeEventHandler, VFC } from "react";

export type Task = {
  id: number;
  content: string;
  isDone: boolean;
};

type TaskItemProps = {
  task: Task;
  toggleIsDone: ChangeEventHandler<HTMLInputElement>;
};

export const TaskItem: VFC<TaskItemProps> = ({ task, toggleIsDone }) => {
  return (
    <label className="flex items-center gap-x-2">
      <input
        type="checkbox"
        value={task.id}
        checked={task.isDone}
        onChange={toggleIsDone}
      />
      <span>{task.content}</span>
    </label>
  );
};
