import { ChangeEventHandler, VFC } from "react";

export type Task = {
  id: number;
  label: string;
  isDone: boolean;
};

type TaskItemProps = {
  task: Task;
  toggle: ChangeEventHandler<HTMLInputElement>;
};

export const TaskItem: VFC<TaskItemProps> = ({ task, toggle }) => {
  return (
    <label className="flex items-center gap-x-2">
      <input
        type="checkbox"
        value={task.id}
        checked={task.isDone}
        onChange={toggle}
      />
      <span>{task.label}</span>
    </label>
  );
};
