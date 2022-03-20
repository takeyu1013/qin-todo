import { ChangeEventHandler, MouseEventHandler, useState, VFC } from "react";
import { Task } from "./TaskItem";
import { TaskList } from "./TaskList";

export const TaskForm: VFC = () => {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const input: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const add: MouseEventHandler<HTMLButtonElement> = () => {
    setTasks((prevTasks) => {
      return [...prevTasks, { id: Math.random(), label: text, isDone: false }];
    });
    setText("");
  };

  return (
    <div className="w-96 mx-auto p-20">
      <TaskList tasks={tasks} setTasks={setTasks} />
      <div className="flex gap-x-2">
        <input
          type="text"
          value={text}
          onChange={input}
          className="border border-black"
        />
        <button
          onClick={add}
          className="border border-black flex-shrink-0 px-2"
        >
          追加
        </button>
      </div>
    </div>
  );
};
