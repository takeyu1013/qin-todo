import type { VFC } from "react";
import type { ScheduleType } from "../TaskHeader";
import { TaskHeader } from "../TaskHeader";
import { TaskForm } from "../TaskForm";
import { Task } from "../../types/task";

type Props = {
  schedule: ScheduleType;
  tasks: Task[];
};

export const TaskCard: VFC<Props> = ({ schedule, tasks }) => {
  return (
    <div className="w-max">
      <div className="pb-4">
        <TaskHeader schedule={schedule} />
      </div>
      <div className="w-80">
        <TaskForm tasks={tasks} />
      </div>
    </div>
  );
};
