import { ReactNode, useEffect, useState, VFC } from "react";
import { User } from "@supabase/supabase-js";
import { Auth } from "@supabase/ui";
import { AuthenticationPresenter } from "./AuthenticationPresenter";
import { supabase } from "../../utils/supabaseClient";

export type AuthenticationProps = {
  children: ReactNode;
};

export const Authentication: VFC<AuthenticationProps> = ({ children }) => {
  const { session } = Auth.useUser();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!user && session) {
      (async () => {
        const response = await supabase.auth.api.getUser(session.access_token);
        setUser(response.user);
      })();
    }
  }, [user, session]);

  if (!session) {
    return <AuthenticationPresenter supabaseClient={supabase} />;
  }

  // TODO: replace with loading guard
  if (!user) {
    return <AuthenticationPresenter supabaseClient={supabase} />;
  }

  return <>{children}</>;
};
