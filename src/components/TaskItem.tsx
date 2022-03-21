import { ChangeEventHandler, MouseEventHandler, VFC } from "react";
import Image from "next/image";

export type Task = {
  id: number;
  content: string;
  isDone: boolean;
};

type TaskItemProps = {
  task: Task;
  toggleIsDone: ChangeEventHandler<HTMLInputElement>;
  duplicateTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
};

export const TaskItem: VFC<TaskItemProps> = ({
  task,
  toggleIsDone,
  duplicateTask,
  deleteTask,
}) => {
  const handleClickToDuplicateTask: MouseEventHandler<
    HTMLImageElement
  > = () => {
    duplicateTask(task);
  };

  const handleClickToDeleteTask: MouseEventHandler<HTMLImageElement> = () => {
    deleteTask(task);
  };

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
        onClick={handleClickToDuplicateTask}
      />

      <Image
        src="/deleteTask.svg"
        alt="deleteTask"
        width={14.67}
        height={14.67}
        objectFit="contain"
        onClick={handleClickToDeleteTask}
      />
    </div>
  );
};
