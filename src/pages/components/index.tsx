import type { NextPage } from "next";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { Header } from "../../components/Header";
import { Task } from "../../components/TaskItem";
import { Loader } from "../../components/Loader";
import { TaskList } from "../../components/TaskList";

const ComponentsPage: NextPage = () => {
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
    <>
      <Loader />
      <Header
        user={{
          image:
            "data:image/jpeg;base64,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",
        }}
      />
      <div className="w-96 mx-auto p-20">
        <h1 className="text-xl font-bold">Task</h1>
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
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
};

export default ComponentsPage;
