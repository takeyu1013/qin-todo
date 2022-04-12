import { useRef, VFC } from "react";
import { Task } from "../types/task";
import { TaskList } from "./TaskList";
import Image from "next/image";
import { useForm, formList } from "@mantine/form";
import { v4 as uuidv4 } from "uuid";
import { initializedTask } from "../../utils/initializedTask";
import { ScheduleType } from "./TaskHeader";
import { scheduledDateMap } from "../../utils/scheduledDateMap";

type Props = {
  tasks: Task[];
  schedule: ScheduleType;
};

export const TaskForm: VFC<Props> = ({ tasks, schedule }) => {
  const taskListFormSubmitButtonRef = useRef<HTMLButtonElement>(null);

  const taskListForm = useForm({
    initialValues: {
      tasks: formList<Task>(tasks),
    },
  });
  type TaskListFormValues = typeof taskListForm.values;

  const taskForm = useForm<Task>({
    initialValues: initializedTask({
      id: uuidv4(),
      scheduled_date: scheduledDateMap[schedule],
    }),
  });
  type TaskFormValues = typeof taskForm.values;

  const handleSubmitToAddTask = (task: TaskFormValues) => {
    if (task.content === "") return;

    taskListForm.addListItem("tasks", {
      ...task,
    });

    taskForm.reset();
  };

  const triggerTaskListFormSubmit = () => {
    setTimeout(() => {
      taskListFormSubmitButtonRef?.current?.click();
    }, 500);
  };

  const handleSubmitToEditTask = ({ tasks }: TaskListFormValues) => {
    console.table(tasks);
  };

  return (
    <div>
      <form onSubmit={taskListForm.onSubmit(handleSubmitToEditTask)}>
        <TaskList
          tasks={taskListForm.values.tasks}
          schedule={schedule}
          taskListForm={taskListForm}
          triggerTaskListFormSubmit={triggerTaskListFormSubmit}
          handleSubmitToEditTask={handleSubmitToEditTask}
        />
        <button
          type="submit"
          className="block invisible"
          ref={taskListFormSubmitButtonRef}
        />
      </form>

      <form onSubmit={taskForm.onSubmit(handleSubmitToAddTask)}>
        <div className="flex py-2 gap-x-2">
          <div className="next-image-space-removal-wrapper">
            <Image
              src="/PlusIcon.svg"
              alt="+"
              width={24}
              height={24}
              layout="fixed"
            />
          </div>

          <input
            className="w-full outline-none h-6 placeholder:text-[#C2C6D2]"
            type="text"
            placeholder="タスクを追加する"
            {...taskForm.getInputProps("content")}
          />
        </div>
      </form>
    </div>
  );
};
