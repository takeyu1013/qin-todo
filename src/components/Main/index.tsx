import type { VFC } from "react";

import { TaskHeader } from "../TaskHeader";

export const Main: VFC = () => {
  return (
    <main className="flex">
      <div>
        <TaskHeader schedule="today" />
      </div>
    </main>
  );
};
