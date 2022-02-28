import type { VFC } from "react";

const ScheduleType = {
  TODAY: "today",
  TOMORROW: "tomorrow",
  NEXT: "next",
} as const;
type ScheduleType = typeof ScheduleType[keyof typeof ScheduleType];

const theme: Record<ScheduleType, string> = {
  today: "text-rose-500",
  tomorrow: "text-orange-400",
  next: "text-yellow-400",
};

type Props = {
  schedule: ScheduleType;
};

const TaskHeader: VFC<Props> = ({ schedule }) => {
  const className = `${theme[schedule]} font-bold text-xl`;
  return <h1 className={className}>今日する</h1>;
};

export default TaskHeader;
