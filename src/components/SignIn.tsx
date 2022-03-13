import { VFC } from "react";
import { Auth } from "@supabase/ui";
import { SignInPresenter } from "./SignInPresenter";
import { TaskHeader } from "./TaskHeader";
import { supabase } from "../../utils/supabaseClient";

export const SignIn: VFC = () => {
  const { user } = Auth.useUser();

  return (
    <>
      {user ? (
        <TaskHeader schedule={"today"}></TaskHeader>
      ) : (
        <SignInPresenter supabaseClient={supabase} />
      )}
    </>
  );
};
