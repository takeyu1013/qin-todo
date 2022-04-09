import type { VFC } from "react";
import { TaskCard } from "../TaskCard";
import { ScheduleType, SCHEDULE_LIST } from "../TaskHeader";
import { Task } from "../../types/task";

export const Main: VFC = () => {
  const myTasks: Task[] = [];

  const filterTasksBySchedule = (myTasks: Task[], schedule: ScheduleType) => {
    return myTasks;
  };

  return (
    <main className="min-h-screen px-20 py-10">
      <div className="flex">
        {Object.values(SCHEDULE_LIST).map((schedule: ScheduleType) => {
          return (
            <div className="p-6 w-1/3 min-w-max" key={schedule}>
              <TaskCard
                schedule={schedule}
                tasks={filterTasksBySchedule(myTasks, schedule)}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};
