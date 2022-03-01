import type { VFC } from "react";

const ScheduleType = {
  TODAY: "today",
  TOMORROW: "tomorrow",
  NEXT: "next",
} as const;
type ScheduleType = typeof ScheduleType[keyof typeof ScheduleType];

type Props = {
  schedule: ScheduleType;
};

type ThemeType = {
  title: string;
  color: string;
};

const TaskHeader: VFC<Props> = ({ schedule }) => {
  const theme: Readonly<Record<ScheduleType, ThemeType>> = {
    today: {
      title: "今日する",
      color: "text-rose-500",
    },
    tomorrow: {
      title: "明日する",
      color: "text-orange-400",
    },
    next: {
      title: "今度する",
      color: "text-yellow-400",
    },
  };

  return (
    <h1 className={`${theme[schedule].color} font-bold text-xl`}>
      {theme[schedule].title}
    </h1>
  );
};

export default TaskHeader;
