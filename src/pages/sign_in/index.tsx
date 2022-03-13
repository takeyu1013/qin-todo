import type { NextPage } from "next";
import type { SupabaseClient } from "@supabase/supabase-js";
import { Auth, Typography, Button } from "@supabase/ui";
import { supabase } from "../../../utils/supabaseClient";

type ContainerProps = {
  supabaseClient: SupabaseClient;
  children: JSX.Element | null;
};

const Container = (props: ContainerProps) => {
  const { user } = Auth.useUser();
  if (user)
    return (
      <>
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    );
  return props.children;
};

const AuthBasic: NextPage = () => {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Container supabaseClient={supabase}>
        <Auth
          onlyThirdPartyProviders={true}
          supabaseClient={supabase}
          providers={["google"]}
        />
      </Container>
    </Auth.UserContextProvider>
  );
};

export default AuthBasic;
