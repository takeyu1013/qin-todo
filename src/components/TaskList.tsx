import { ChangeEventHandler, Dispatch, SetStateAction, VFC } from "react";
import { Task } from "../types/task";
import { TaskItem } from "./TaskItem";

type TaskLlistProps = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
};

export const TaskList: VFC<TaskLlistProps> = ({ tasks, setTasks }) => {
  const toggleIsDone: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === Number(e.target.value)) {
          return { ...task, isDone: !task.isDone };
        }
        return task;
      });
    });
  };

  const duplicateTask = (task: Task) => {
    setTasks((prevTasks) => {
      return [...prevTasks, { ...task, id: Math.random(), isDone: false }];
    });
  };

  const deleteTask = (task: Task) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((prevTask) => prevTask.id !== task.id);
    });
  };

  return (
    <ul className="mt-4 space-y-2">
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem
            task={task}
            toggleIsDone={toggleIsDone}
            duplicateTask={duplicateTask}
            deleteTask={deleteTask}
          />
        </li>
      ))}
    </ul>
  );
};
