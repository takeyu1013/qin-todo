import { VFC } from "react";
import { Task } from "../types/task";
import { TaskList } from "./TaskList";
import Image from "next/image";
import { useForm, formList } from "@mantine/form";
import { v4 as uuidv4 } from "uuid";

export const initializedTask = (id: string): Task => {
  return { id, content: "", isDone: false };
};

type Props = {
  tasks: Task[];
};

export const TaskForm: VFC<Props> = ({ tasks }) => {
  const taskListForm = useForm({
    initialValues: {
      tasks: formList<Task>(tasks),
    },
  });
  type TaskListFormValues = typeof taskListForm.values;

  const taskForm = useForm<Task>({
    initialValues: initializedTask(uuidv4()),
  });
  type TaskFormValues = typeof taskForm.values;

  const handleSubmitToAddTask = (task: TaskFormValues) => {
    if (task.content === "") return;

    taskListForm.addListItem("tasks", {
      ...task,
    });

    taskForm.reset();
  };

  const handleSubmitToEditTask = ({ tasks }: TaskListFormValues) => {
    console.table(tasks);
  };

  return (
    <div>
      <form onSubmit={taskListForm.onSubmit(handleSubmitToEditTask)}>
        <TaskList
          tasks={taskListForm.values.tasks}
          taskListForm={taskListForm}
          handleSubmitToEditTask={handleSubmitToEditTask}
        />
        <button className="block invisible" />
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
