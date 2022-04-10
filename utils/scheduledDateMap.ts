import { endOfToday, addDays } from "date-fns";
import { ScheduleType } from "../src/components/TaskHeader";
import { ScheduledDate } from "../src/types/task";

type ScheduledDateMap = {
  [key in ScheduleType]: ScheduledDate;
};

export const scheduledDateMap: Readonly<ScheduledDateMap> = {
  today: endOfToday(),
  tomorrow: addDays(endOfToday(), 1),
  next: null,
};
