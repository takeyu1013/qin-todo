import { ReactNode, VFC } from "react";
import { Auth } from "@supabase/ui";
import { SignInPresenter } from "./SignInPresenter";
import { supabase } from "../../utils/supabaseClient";

type Props = {
  children: ReactNode;
};

export const SignIn: VFC<Props> = ({ children }) => {
  const { user } = Auth.useUser();

  return <>{user ? children : <SignInPresenter supabaseClient={supabase} />}</>;
};
