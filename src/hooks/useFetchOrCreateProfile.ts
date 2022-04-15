import { useEffect, useState } from "react";
import { User } from "@supabase/gotrue-js";
import { supabase } from "../../utils/supabaseClient";
import { PostgrestError } from "@supabase/supabase-js";

const fetchOrCreateProfile = async (user: User) => {
  const { data, count } = await fetchProfile();

  if (count) return data;

  return await createProfile(user);
};

const fetchProfile = async () => {
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

const useFetchOrCreateProfile = (user: User | null) => {
  const [profile, setProfile] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<PostgrestError | null>(null);

  useEffect(() => {
    if (user) {
      setIsLoading(true);

      fetchOrCreateProfile(user)
        .then((profile) => {
          setProfile(profile);
        })
        .catch((error: PostgrestError) => {
          console.error(error.message, error.code, error.details, error.hint);
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [user]);

  return { profile, error, isLoading };
};

export default useFetchOrCreateProfile;
