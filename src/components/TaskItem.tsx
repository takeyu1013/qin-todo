import { MouseEventHandler, VFC } from "react";
import Image from "next/image";
import { Task } from "../types/task";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import { FormList } from "@mantine/form/lib/form-list/form-list";
import { initializedTask } from "./TaskForm";

type TaskItemProps = {
  task: Task;
  index: number;
  taskListForm: UseFormReturnType<{
    tasks: FormList<Task>;
  }>;
  handleSubmitToEditTask: ({ tasks }: { tasks: FormList<Task> }) => void;
};

export const TaskItem: VFC<TaskItemProps> = ({
  task,
  index,
  taskListForm,
  handleSubmitToEditTask,
}) => {
  const handleClickToDuplicateTask: MouseEventHandler<
    HTMLImageElement
  > = () => {
    taskListForm.addListItem("tasks", {
      ...initializedTask(Math.random()),
      content: task.content,
    });
  };

  const handleClickToDeleteTask: MouseEventHandler<HTMLImageElement> = () => {
    taskListForm.removeListItem("tasks", index);
  };

  return (
    <div className="flex items-center gap-x-2 group">
      <label className="flex items-center gap-x-2 mr-auto">
        <div className="next-image-space-removal-wrapper">
          <Image
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
          {...taskListForm.getListInputProps("tasks", index, "isDone", {
            type: "checkbox",
          })}
        />
      </label>

      <input
        className={`w-full outline-none break-all ${
          task.isDone ? "line-through text-[#C2C6D2]" : ""
        }`}
        type="text"
        onBlur={taskListForm.onSubmit(handleSubmitToEditTask)}
        {...taskListForm.getListInputProps("tasks", index, "content")}
      />

      <div className="next-image-space-removal-wrapper invisible group-hover:visible">
        <Image
          src="/duplicateTask.svg"
          alt="duplicateTask"
          width={14.67}
          height={14.67}
          layout="fixed"
          onClick={handleClickToDuplicateTask}
        />
      </div>

      <div className="next-image-space-removal-wrapper invisible group-hover:visible">
        <Image
          src="/deleteTask.svg"
          alt="deleteTask"
          width={14.67}
          height={14.67}
          layout="fixed"
          onClick={handleClickToDeleteTask}
        />
      </div>

      <button className="invisible" />
    </div>
  );
};
