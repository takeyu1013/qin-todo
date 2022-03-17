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
    if (!user && session) {
      setIsLoading(true);

      (async () => {
        const response = await supabase.auth.api.getUser(session.access_token);
        setIsLoading(false);
        setUser(response.user);
      })();
    }
  }, [user, session]);

  if (!session) {
    return <AuthenticationPresenter supabaseClient={supabase} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return user ? (
    <>{children}</>
  ) : (
    <AuthenticationPresenter supabaseClient={supabase} />
  );
};
