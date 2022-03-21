import { ChangeEventHandler, VFC } from "react";
import Image from "next/image";

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
    <div className="flex items-center gap-x-2">
      <label className="flex items-center gap-x-2 mr-auto">
        <input
          type="checkbox"
          value={task.id}
          checked={task.isDone}
          onChange={toggleIsDone}
        />
        {task.isDone ? <del>{task.content}</del> : <span>{task.content}</span>}
      </label>

      <Image
        src="/duplicateTask.svg"
        alt="duplicateTask"
        width={14.67}
        height={14.67}
        objectFit="contain"
      />

      <Image
        src="/deleteTask.svg"
        alt="deleteTask"
        width={14.67}
        height={14.67}
        objectFit="contain"
      />
    </div>
  );
};
