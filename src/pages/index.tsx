import type { NextPage } from "next";
import type { AuthenticationProps } from "../components/Authentication";
import dynamic from "next/dynamic";
import { TaskHeader } from "../components/TaskHeader";

const DynamicAuthentication = dynamic<AuthenticationProps>(
  () =>
    import("../components/Authentication").then((mod) => mod.Authentication),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  return (
    <DynamicAuthentication>
      <TaskHeader schedule={"today"} />
    </DynamicAuthentication>
  );
};

export default Home;
