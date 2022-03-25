import type { VFC } from "react";

import { TaskCard } from "../TaskCard";
import { SCHEDULE_LIST } from "../TaskHeader";

export const Main: VFC = () => {
  return (
    <main className="min-h-screen px-20 py-10">
      <div className="flex">
        {Object.values(SCHEDULE_LIST).map((schedule) => {
          return (
            <div className="p-6 w-1/3" key={schedule}>
              <TaskCard schedule={schedule} />
            </div>
          );
        })}
      </div>
    </main>
  );
};
