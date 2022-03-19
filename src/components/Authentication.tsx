import { ReactNode, useEffect, useState, VFC } from "react";
import { Session, User, ApiError } from "@supabase/gotrue-js";
import { Auth } from "@supabase/ui";
import { AuthenticationPresenter } from "./AuthenticationPresenter";
import { supabase } from "../../utils/supabaseClient";
import { Loader } from "./Loader";

export type AuthenticationProps = {
  children: ReactNode;
};

export const Authentication: VFC<AuthenticationProps> = ({ children }) => {
  const { session } = Auth.useUser();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiError | null>(null);

  const getUserBySession = async (session: Session) => {
    const { user, error } = await supabase.auth.api.getUser(
      session.access_token
    );
    if (error) {
      setError(error);
      console.error(error.message, error.status);
    }
    if (user) setUser(user);
  };

  useEffect(() => {
    if (!user && session) {
      getUserBySession(session);
    } else {
      setIsLoading(false);
    }
  }, [user, session]);

  if (error) {
    return <Loader />; // TODO: should be replaced with `Error Boundary`
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!session) {
    return <AuthenticationPresenter supabaseClient={supabase} />;
  }

  return user ? (
    <>{children}</>
  ) : (
    <AuthenticationPresenter supabaseClient={supabase} />
  );
};
