import { ChangeEventHandler, MouseEventHandler, useState, VFC } from "react";
import { Task } from "./TaskItem";
import { TaskList } from "./TaskList";

export const TaskForm: VFC = () => {
  const [content, setContent] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleChangeInputContent: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setContent(e.target.value);
  };

  const handleOnClickToAddTask: MouseEventHandler<HTMLButtonElement> = () => {
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        { id: Math.random(), content: content, isDone: false },
      ];
    });
    setContent("");
  };

  return (
    <div className="w-96 mx-auto p-20">
      <TaskList tasks={tasks} setTasks={setTasks} />
      <div className="flex gap-x-2">
        <input
          type="text"
          placeholder="タスクを追加する"
          value={content}
          onChange={handleChangeInputContent}
          className="border border-black"
        />
        <button
          onClick={handleOnClickToAddTask}
          className="border border-black flex-shrink-0 px-2"
        >
          追加
        </button>
      </div>
    </div>
  );
};
