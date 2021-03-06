import { VFC, ComponentProps } from "react";
import Image from "next/image";
import { Task } from "../types/task";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import { FormList } from "@mantine/form/lib/form-list/form-list";
import { v4 as uuidv4 } from "uuid";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "tabler-icons-react";
import { initializedTask } from "../../utils/initializedTask";
import { ScheduleType } from "./TaskHeader";
import { scheduledDateMap } from "../../utils/scheduledDateMap";

type TaskItemProps = {
  task: Task;
  schedule: ScheduleType;
  index: number;
  taskListForm: UseFormReturnType<{
    tasks: FormList<Task>;
  }>;
  triggerTaskListFormSubmit: () => void;
  handleSubmitToEditTask: ({ tasks }: { tasks: FormList<Task> }) => void;
};

export const TaskItem: VFC<TaskItemProps> = ({
  task,
  schedule,
  index,
  taskListForm,
  triggerTaskListFormSubmit,
  handleSubmitToEditTask,
}) => {
  const handleClickToToggleIsDone: ComponentProps<"input">["onChange"] = (
    e
  ) => {
    const prevValue = taskListForm.values.tasks[index];
    const isChecked = e.currentTarget.checked;

    taskListForm.setListItem("tasks", index, {
      ...prevValue,
      is_done: isChecked,
      done_at: isChecked ? new Date() : null,
    });
    triggerTaskListFormSubmit();
  };

  const handleClickToDuplicateTask: ComponentProps<"img">["onClick"] = () => {
    taskListForm.addListItem("tasks", {
      ...initializedTask({
        id: uuidv4(),
        scheduled_date: scheduledDateMap[schedule],
      }),
      content: task.content,
    });
    triggerTaskListFormSubmit();
  };

  const handleClickToDeleteTask: ComponentProps<"img">["onClick"] = () => {
    taskListForm.removeListItem("tasks", index);
    triggerTaskListFormSubmit();
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className="flex items-center gap-x-2 group relative"
      ref={setNodeRef}
      style={style}
    >
      <div className="flex items-center gap-x-2 mr-auto">
        <GripVertical
          className="outline-none opacity-0 group-hover:opacity-100 absolute -left-6"
          size={24}
          strokeWidth={2}
          color={"#C2C6D2"}
          {...attributes}
          {...listeners}
        />

        <label>
          <div className="next-image-space-removal-wrapper">
            <Image
              src={`${
                task.is_done
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
            {...taskListForm.getListInputProps("tasks", index, "is_done", {
              type: "checkbox",
            })}
            checked={taskListForm.values.tasks[index].is_done}
            onChange={handleClickToToggleIsDone}
          />
        </label>
      </div>

      <input
        className={`w-full bg-transparent outline-none break-all ${
          task.is_done ? "line-through text-[#C2C6D2]" : ""
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
    </div>
  );
};
