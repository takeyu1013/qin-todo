import type { NextPage } from "next";
import type { AuthenticationProps } from "../components/Authentication";
import dynamic from "next/dynamic";
import { Loader } from "../components/Loader";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Auth } from "@supabase/ui";
import useFetchUser from "../hooks/useFetchUser";

const Authentication = dynamic<AuthenticationProps>(
  () =>
    import("../components/Authentication").then((mod) => mod.Authentication),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

const Home: NextPage = () => {
  const { session } = Auth.useUser();
  const { user, error, isLoading } = useFetchUser(session);

  if (error) {
    return <Loader />; // TODO: should be replaced with `Error Boundary`
  }

  if (isLoading || !user) {
    return <Loader />;
  }

  return (
    <Authentication>
      <Header user={user} />
      <Main />
    </Authentication>
  );
};

export default Home;
