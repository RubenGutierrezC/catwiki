import type { NextPage } from "next";
import HaveCat from "../components/HaveCat";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <HaveCat />
    </>
  );
};

export default Home;
