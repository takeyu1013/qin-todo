import { VFC } from "react";
import { Auth } from "@supabase/ui";
import type { SupabaseClient } from "@supabase/supabase-js";
import { SignInPresenter } from "./SignInPresenter";

type Props = {
  supabaseClient: SupabaseClient;
};

export const SignIn: VFC<Props> = ({ supabaseClient }) => {
  return (
    <Auth.UserContextProvider supabaseClient={supabaseClient}>
      <SignInPresenter supabaseClient={supabaseClient}></SignInPresenter>
    </Auth.UserContextProvider>
  );
};
