import { useEffect, useState, VFC } from "react";
import { TaskCard } from "../TaskCard";
import { ScheduleType, SCHEDULE_LIST } from "../TaskHeader";
import { Task } from "../../types/task";
import { Loader } from "../Loader";
import { Auth } from "@supabase/ui";
import { supabase } from "../../../utils/supabaseClient";
import { User } from "@supabase/gotrue-js";
import useFetchUser from "../../hooks/useFetchUser";

const findOrCreateProfile = async (user: User) => {
  const { data, count } = await findProfile();

  if (count) return data;

  return await createProfile(user);
};

const findProfile = async () => {
  const { data, error, count } = await supabase
    .from("profiles")
    .select("*", { count: "exact" });

  if (error) throw error;

  return { data, count };
};

const createProfile = async (user: User) => {
  const { data, error } = await supabase
    .from("profiles")
    .insert([{ id: user.id, name: user.user_metadata?.name || "unknown" }]);

  if (error) throw error;

  return data;
};

export const Main: VFC = () => {
  const { session } = Auth.useUser();
  const { user, error, isLoading } = useFetchUser(session);
  const [profile, setProfile] = useState<any[] | null>(null);

  useEffect(() => {
    if (user) {
      findOrCreateProfile(user)
        .then((profile) => {
          setProfile(profile);
          console.table(profile);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  if (error) {
    return <Loader />; // TODO: should be replaced with `Error Boundary`
  }

  if (isLoading || !user || !profile) {
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
