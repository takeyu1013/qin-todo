import type { VFC } from "react";

import { TaskCard } from "../TaskCard";
import { SCHEDULE_LIST } from "../TaskHeader";

export const Main: VFC = () => {
  return (
    <main className="px-20 pt-10 flex">
      {Object.values(SCHEDULE_LIST).map((schedule) => {
        return (
          <div className="w-1/3" key={schedule}>
            <TaskCard schedule={schedule} />
          </div>
        );
      })}
    </main>
  );
};
