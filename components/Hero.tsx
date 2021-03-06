import Image from "next/image";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { FetchTopData } from "../types/interfaces";
import Link from "next/link";

const Hero: FunctionComponent<FetchTopData> = ({ data = [] }) => {
  return (
    <section className="relative rounded-t-42 overflow-hidden">
      <div className="relative h-36 sm:h-96 bg-black">
        <Image
          className="z-0"
          src="/assets/HeroImagelg.png"
          layout="fill"
          objectFit="cover"
          alt="catwiki hero"
          quality={90}
        />
        <div className="text-white ml-7 md:ml-24 pt-5 sm:pt-28 relative z-10">
          <h1 className="font-mistery font-normal text-sm sm:text-4xl md:text-6xl mb-2 md:mb-3 ">
            catwiki
          </h1>
          <p className="text-xs sm:text-xl  md:text-2xl font-mont w-33 sm:w-80 md:w-96">
            Get to know more about your cat breed
          </p>
        </div>
      </div>
      <div className="px-7 md:px-24 pt-3 bg-heroDown mb-16 rounded-b-42">
        <p className="font-mont text-xs md:text-lg text-customBrown most-searched mb-4 md:mt-10">
          Most Searched Breeds
        </p>
        <div className="flex mb-6 md:mb-11">
          <p className="font-mont whitespace-pre text-customBrown text-lg md:text-5xl font-bold">
            66+ Brereds For you {"\n"}to discover
          </p>
          <Link href="/top">
            <a className="ml-auto self-end font-mont text-lg hidden sm:block">
              SEE MORE &#8594;
            </a>
          </Link>
        </div>
        <div className="flex justify-between flex-wrap pb-9 md:pb-24">
          {data.map((cat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                  },
                },
              }}
              className="mb-4 mr-1"
            >
              <Link href={`/breeds/${cat.name}`} passHref>
                <div className="relative w-breed md:w-breed-md h-breed md:h-breed-md rounded-xl overflow-hidden mb-3 md:mb-5 cursor-pointer">
                  <Image
                    src={cat.image.url}
                    layout="fill"
                    objectFit="cover"
                    alt="cats breeds"
                  />
                </div>
              </Link>

              <p className="font-mont text-customBrown text-xs md:text-lg font-semibold">
                {cat.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
