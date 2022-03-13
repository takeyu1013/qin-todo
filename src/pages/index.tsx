import type { NextPage } from "next";
import { supabase } from "../../utils/supabaseClient";
import { SignIn } from "../components/SignIn";

const Home: NextPage = () => {
  return <SignIn supabaseClient={supabase}></SignIn>;
};

export default Home;
