import { useEffect, useState } from "react";
import { Session, User, ApiError } from "@supabase/gotrue-js";
import { supabase } from "../../utils/supabaseClient";

const fetchUserBySession = async (session: Session) => {
  const { user, error } = await supabase.auth.api.getUser(session.access_token);

  if (error) throw error;

  return user;
};

const useFetchUser = (session: Session | null) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    if (session) {
      setIsLoading(true);

      fetchUserBySession(session)
        .then((user) => {
          setUser(user);
        })
        .catch((error: ApiError) => {
          setError(error);
          console.error(error.message, error.status);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [session]);

  return { user, error, isLoading };
};

export default useFetchUser;
