import { ReactNode, VFC } from "react";
import { Auth } from "@supabase/ui";
import { AuthenticationPresenter } from "./AuthenticationPresenter";
import { supabase } from "../../utils/supabaseClient";

type Props = {
  children: ReactNode;
};

export const Authentication: VFC<Props> = ({ children }) => {
  const { user } = Auth.useUser();

  return (
    <>
      {user ? children : <AuthenticationPresenter supabaseClient={supabase} />}
    </>
  );
};
