import { ChangeEventHandler, MouseEventHandler, VFC } from "react";
import Image from "next/image";
import { Task } from "../types/task";

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
        <div>
          <Image
            className="hidden"
            src={`${
              task.isDone
                ? "/onCheckedCheckboxIcon.svg"
                : "/offCheckedCheckboxIcon.svg"
            }`}
            alt="checkboxIcon"
            width={24}
            height={24}
            layout="fixed"
          />
        </div>

        <input
          className="absolute opacity-0"
          type="checkbox"
          value={task.id}
          checked={task.isDone}
          onChange={toggleIsDone}
        />
        {task.isDone ? (
          <p className="text-[#C2C6D2] line-through">{task.content}</p>
        ) : (
          <p>{task.content}</p>
        )}
      </label>

      <div>
        <Image
          src="/duplicateTask.svg"
          alt="duplicateTask"
          width={14.67}
          height={14.67}
          layout="fixed"
          onClick={handleClickToDuplicateTask}
        />
      </div>

      <div>
        <Image
          src="/deleteTask.svg"
          alt="deleteTask"
          width={14.67}
          height={14.67}
          layout="fixed"
          onClick={handleClickToDeleteTask}
        />
      </div>
    </div>
  );
};
