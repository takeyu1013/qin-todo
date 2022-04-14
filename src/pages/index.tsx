import type { NextPage } from "next";
import type { AuthenticationProps } from "../components/Authentication";
import dynamic from "next/dynamic";
import { Loader } from "../components/Loader";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

const Authentication = dynamic<AuthenticationProps>(
  () =>
    import("../components/Authentication").then((mod) => mod.Authentication),
  {
    ssr: false,
    loading: () => <Loader />, // TODO: should be replaced with `Page Level Loader`
  }
);

const Home: NextPage = () => {
  return (
    <Authentication>
      <Header />
      <Main />
    </Authentication>
  );
};

export default Home;
