import { VFC } from "react";
import { TaskCard } from "../TaskCard";
import { ScheduleType, SCHEDULE_LIST } from "../TaskHeader";
import { Task } from "../../types/task";
import { Loader } from "../Loader";
import { Auth } from "@supabase/ui";
import useFetchUser from "../../hooks/useFetchUser";
import useFetchOrCreateProfile from "../../hooks/useFetchOrCreateProfile";

export const Main: VFC = () => {
  const { session } = Auth.useUser();
  const {
    user,
    error: userError,
    isLoading: userLoading,
  } = useFetchUser(session);
  const {
    profile,
    error: profileError,
    isLoading: profileLoading,
  } = useFetchOrCreateProfile(user);

  if (userError || profileError) {
    return <Loader />; // TODO: should be replaced with `Error Boundary`
  }

  if (userLoading || profileLoading) {
    return <Loader />;
  }

  if (!user || !profile) {
    return <Loader />;
  }

  const myTasks: Task[] = [];

  const filterTasksBySchedule = (myTasks: Task[], schedule: ScheduleType) => {
    return myTasks;
  };

  return (
    <main className="min-h-screen px-20 py-10">
      <div className="flex">
        {Object.values(SCHEDULE_LIST).map((schedule: ScheduleType) => {
          return (
            <div className="p-6 w-1/3 min-w-max" key={schedule}>
              <TaskCard
                schedule={schedule}
                tasks={filterTasksBySchedule(myTasks, schedule)}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};
