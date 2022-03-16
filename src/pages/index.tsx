import type { NextPage } from "next";
import type { AuthenticationProps } from "../components/Authentication";
import dynamic from "next/dynamic";
import { TaskHeader } from "../components/TaskHeader";
import { Loader } from "../components/Loader";

const DynamicAuthentication = dynamic<AuthenticationProps>(
  () =>
    import("../components/Authentication").then((mod) => mod.Authentication),
  {
    ssr: false,
    loading: () => <Loader />,
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
