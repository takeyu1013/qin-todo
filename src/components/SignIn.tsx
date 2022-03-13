import { VFC } from "react";
import { Auth, Typography, Button } from "@supabase/ui";
import type { SupabaseClient } from "@supabase/supabase-js";
import { SignInPresenter } from "./SignInPresenter";

type Props = {
  supabaseClient: SupabaseClient;
};

export const SignIn: VFC<Props> = ({ supabaseClient }) => {
  const { user } = Auth.useUser();

  if (user)
    return (
      <>
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button block onClick={() => supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    );

  return (
    <>
      <Auth.UserContextProvider supabaseClient={supabaseClient}>
        <SignInPresenter supabaseClient={supabaseClient}></SignInPresenter>
      </Auth.UserContextProvider>
    </>
  );
};
