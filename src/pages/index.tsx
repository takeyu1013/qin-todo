import type { NextPage } from "next";
import { SignIn } from "../components/SignIn";
import { TaskHeader } from "../components/TaskHeader";

const Home: NextPage = () => {
  return (
    <SignIn>
      <TaskHeader schedule={"today"} />
    </SignIn>
  );
};

export default Home;
