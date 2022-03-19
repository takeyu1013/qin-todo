import { useEffect, useState } from "react";
import { Session, User, ApiError } from "@supabase/gotrue-js";
import { supabase } from "../../utils/supabaseClient";

const useFetchUser = (session: Session | null) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchUserBySession = async (session: Session) => {
    const { user, error } = await supabase.auth.api.getUser(
      session.access_token
    );
    if (error) {
      setError(error);
      console.error(error.message, error.status);
    }
    if (user) setUser(user);

    setIsLoading(false);
  };

  useEffect(() => {
    if (session) {
      fetchUserBySession(session);
    } else {
      setIsLoading(false);
    }
  }, [session]);

  return { user, error, isLoading };
};

export default useFetchUser;
