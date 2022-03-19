import { ReactNode, VFC } from "react";
import { Auth } from "@supabase/ui";
import { AuthenticationPresenter } from "./AuthenticationPresenter";
import { supabase } from "../../utils/supabaseClient";
import { Loader } from "./Loader";
import useFetchUser from "../hooks/useFetchUser";

export type AuthenticationProps = {
  children: ReactNode;
};

export const Authentication: VFC<AuthenticationProps> = ({ children }) => {
  const { session } = Auth.useUser();
  const { user, error, isLoading } = useFetchUser(session);

  if (error) {
    return <Loader />; // TODO: should be replaced with `Error Boundary`
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
