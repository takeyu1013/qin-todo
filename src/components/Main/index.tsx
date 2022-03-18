import type { VFC } from "react";

import { ScheduleType, TaskHeader } from "../TaskHeader";

export const Main: VFC = () => {
  return (
    <main className="px-20 pt-10 flex">
      {Object.values(ScheduleType).map((schedule) => {
        return (
          <div className="pl-6 pt-6" key={schedule}>
            <TaskHeader schedule={schedule} />
          </div>
        );
      })}
    </main>
  );
};
