import type { NextPage } from "next";
import { Authentication } from "../components/Authentication";
import { TaskHeader } from "../components/TaskHeader";

const Home: NextPage = () => {
  return (
    <Authentication>
      <TaskHeader schedule={"today"} />
    </Authentication>
  );
};

export default Home;
