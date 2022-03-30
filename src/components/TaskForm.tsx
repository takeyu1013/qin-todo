import { VFC } from "react";
import { Task } from "../types/task";
import { TaskList } from "./TaskList";
import Image from "next/image";
import { useForm, formList } from "@mantine/form";

export const TaskForm: VFC = () => {
  const taskListForm = useForm({
    initialValues: {
      tasks: formList<Task>([]),
    },
  });
  type TaskListFormValues = typeof taskListForm.values;

  const taskForm = useForm<Task>({
    initialValues: { id: Math.random(), content: "", isDone: false },
  });
  type TaskFormValues = typeof taskForm.values;

  const handleSubmitToAddTask = (task: TaskFormValues) => {
    if (task.content === "") return;

    taskListForm.addListItem("tasks", {
      id: Math.random(),
      content: task.content,
      isDone: false,
    });

    taskForm.reset();
  };

  return (
    <>
      <form>
        <TaskList
          tasks={taskListForm.values.tasks}
          taskListForm={taskListForm}
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
            type="text"
            placeholder="タスクを追加する"
            {...taskForm.getInputProps("content")}
            className="outline-none h-6 placeholder:text-[#C2C6D2]"
          />
        </div>
      </form>
    </>
  );
};
