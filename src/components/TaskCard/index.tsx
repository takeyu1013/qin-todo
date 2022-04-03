import type { VFC } from "react";
import type { ScheduleType } from "../TaskHeader";
import { TaskHeader } from "../TaskHeader";
import { TaskForm } from "../TaskForm";

type Props = {
  schedule: ScheduleType;
};

export const TaskCard: VFC<Props> = ({ schedule }) => {
  return (
    <>
      <div className="pb-4">
        <TaskHeader schedule={schedule} />
      </div>
      <TaskForm />
    </>
  );
};
