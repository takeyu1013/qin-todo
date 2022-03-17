import { ReactNode, useEffect, useState, VFC } from "react";
import { User } from "@supabase/supabase-js";
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

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!user && session) {
      setIsLoading(true);

      (async () => {
        const response = await supabase.auth.api.getUser(session.access_token);
        setIsLoading(false);
        setUser(response.user);
      })();
    }
  }, [user, session]);

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
