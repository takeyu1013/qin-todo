import { ChangeEventHandler, FormEventHandler, useState, VFC } from "react";
import { Task } from "../types/task";
import { TaskList } from "./TaskList";
import Image from "next/image";

export const TaskForm: VFC = () => {
  const [content, setContent] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const eraseInputContent = () => {
    setContent("");
  };

  const handleChangeInputContent: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setContent(e.target.value);
  };

  const handleSubmitToAddTask: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!content) return;

    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        { id: Math.random(), content: content, isDone: false },
      ];
    });
    eraseInputContent();
  };

  return (
    <form onSubmit={handleSubmitToAddTask}>
      <TaskList tasks={tasks} setTasks={setTasks} />
      <div className="flex py-2 gap-x-2">
        <div>
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
          value={content}
          onChange={handleChangeInputContent}
          className="outline-none h-6 placeholder:text-[#C2C6D2]"
        />
      </div>
    </form>
  );
};
