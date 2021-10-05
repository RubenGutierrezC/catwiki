import type { GetServerSideProps, NextPage } from "next";
import HaveCat from "../components/HaveCat";
import Hero from "../components/Hero";
import { catWikiRepository } from "../services/repository";
import { FetchTopData } from "../types/interfaces";

export const getServerSideProps: GetServerSideProps = async () => {
  const top4Cats = await catWikiRepository.getTop4Breeds();

  return {
    props: {
      data: top4Cats,
    },
  };
};

const Home: NextPage<FetchTopData> = ({ data }) => {
  return (
    <>
      <Hero data={data} />
      <HaveCat />
    </>
  );
};

export default Home;
