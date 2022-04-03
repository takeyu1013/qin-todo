import { FormList } from "@mantine/form/lib/form-list/form-list";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import { VFC } from "react";
import { Task } from "../types/task";
import { TaskItem } from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  taskListForm: UseFormReturnType<{
    tasks: FormList<Task>;
  }>;
  handleSubmitToEditTask: ({ tasks }: { tasks: FormList<Task> }) => void;
};

export const TaskList: VFC<TaskListProps> = ({
  tasks,
  taskListForm,
  handleSubmitToEditTask,
}) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={task.id}>
          <div className="py-2">
            <TaskItem
              task={task}
              index={index}
              taskListForm={taskListForm}
              handleSubmitToEditTask={handleSubmitToEditTask}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
