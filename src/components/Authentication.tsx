import { ReactNode, useEffect, useState, VFC } from "react";
import { User } from "@supabase/supabase-js";
import { Auth } from "@supabase/ui";
import { AuthenticationPresenter } from "./AuthenticationPresenter";
import { supabase } from "../../utils/supabaseClient";

type Props = {
  children: ReactNode;
};

export const Authentication: VFC<Props> = ({ children }) => {
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

  return (
    <>
      {user ? children : <AuthenticationPresenter supabaseClient={supabase} />}
    </>
  );
};
