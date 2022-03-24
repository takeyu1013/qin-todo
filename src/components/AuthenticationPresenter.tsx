import { VFC } from "react";
import { Auth } from "@supabase/ui";
import type { SupabaseClient } from "@supabase/supabase-js";

type Props = {
  supabaseClient: SupabaseClient;
};

export const AuthenticationPresenter: VFC<Props> = ({ supabaseClient }) => {
  return (
    <Auth
      onlyThirdPartyProviders={true}
      supabaseClient={supabaseClient}
      providers={["google"]}
      redirectTo={process.env.NEXT_PUBLIC_AUTH_REDIRECT_URL}
    />
  );
};
