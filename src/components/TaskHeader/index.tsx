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

type ThemeType = Readonly<
  Record<
    ScheduleType,
    {
      title: "今日する" | "明日する" | "今度する";
      textColor: string;
    }
  >
>;

const TaskHeader: VFC<Props> = ({ schedule }) => {
  const theme: ThemeType = {
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

  return <h2 className={`${textColor} font-bold text-xl`}>{title}</h2>;
};

export default TaskHeader;
