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
  textColor: string;
};

const TaskHeader: VFC<Props> = ({ schedule }) => {
  const theme: Readonly<Record<ScheduleType, ThemeType>> = {
    today: {
      title: "今日する",
      textColor: "text-rose-500",
    },
    tomorrow: {
      title: "明日する",
      textColor: "text-orange-400",
    },
    next: {
      title: "今度する",
      textColor: "text-yellow-400",
    },
  };
  const { title, textColor } = theme[schedule];

  return <h1 className={`${textColor} font-bold text-xl`}>{title}</h1>;
};

export default TaskHeader;
