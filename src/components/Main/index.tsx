import type { VFC } from "react";

import type { TaskHeaderProps } from "../TaskHeader";
import { SCHEDULE_LIST, TaskHeader } from "../TaskHeader";

const PlusIcon: VFC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="11"
        fill="#C2C6D2"
        stroke="#C2C6D2"
        strokeWidth="2"
      />
      <path
        d="M12 12H6.5M12 6.5V12V6.5ZM12 12V17.5V12ZM12 12H17.5H12Z"
        stroke="white"
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const TaskCard: VFC<TaskHeaderProps> = ({ schedule }) => {
  return (
    <div className="pl-6 pt-6" key={schedule}>
      <div className="pb-4">
        <TaskHeader schedule={schedule} />
      </div>
      <div className="flex">
        <div className="pr-3">
          <PlusIcon />
        </div>
        <input className="outline-none" placeholder="タスクを追加する" />
      </div>
    </div>
  );
};

const TaskCardList: VFC = () => {
  return (
    <div className="flex">
      {Object.values(SCHEDULE_LIST).map((schedule) => {
        return (
          <div className="w-1/3" key={schedule}>
            <TaskCard schedule={schedule} />
          </div>
        );
      })}
    </div>
  );
};

export const Main: VFC = () => {
  return (
    <main className="px-20 pt-10">
      <TaskCardList />
    </main>
  );
};
