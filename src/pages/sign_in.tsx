import type { NextPage } from "next";
import { SignIn } from "../components/SignIn";
import { supabase } from "../../utils/supabaseClient";

const SignInPage: NextPage = () => {
  return <SignIn supabaseClient={supabase}></SignIn>;
};

export default SignInPage;
