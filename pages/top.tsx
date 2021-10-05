import { GetServerSideProps, NextPage } from "next";
import { catWikiRepository } from "../services/repository";
import { FetchTopData } from "../types/interfaces";
import Image from "next/image";
import { motion } from "framer-motion";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export const getServerSideProps: GetServerSideProps = async () => {
  const top4Cats = await catWikiRepository.getTop10Breeds();

  return {
    props: {
      data: top4Cats,
    },
  };
};

const top: NextPage<FetchTopData> = ({ data }) => {
  return (
    <motion.section initial="hidden" animate="visible" variants={list}>
      <h1 className="font-mont text-xl md:text-4xl font-bold mb-14 mt-10">
        Top 10 most searched breeds
      </h1>
      {data.map((cat, i) => (
        <motion.div
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          transition={{ velocity: 2 }}
          key={i}
          className="flex lg:w-4/5 pb-10 mb-10  sm:flex-row flex-col"
        >
          <div className="sm:w-44 sm:h-44 h-40 w-40 sm:mr-10 inline-flex mx-auto items-center justify-center rounded-3xl flex-shrink-0 relative overflow-hidden">
            <Image
              src={cat.image.url}
              layout="fill"
              objectFit="cover"
              alt="cats breeds"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="font-mont md:text-4xl sm:text-xl font-semibold mb-6">
              {cat.name}
            </h2>
            <p className="leading-relaxed font-medium text-md md:text-lg">
              {cat.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default top;
