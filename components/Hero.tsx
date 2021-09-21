import Image from "next/image";

const mockCats = [
  {
    img: "/assets/image2.png",
    name: "Bengal",
  },
  {
    img: "/assets/image2.png",
    name: "Savannah",
  },
  {
    img: "/assets/image2.png",
    name: "Norwegian Forest Cat",
  },
  {
    img: "/assets/image2.png",
    name: "Selkirk Rex",
  },
];

const Hero = () => {
  return (
    <section className="relative rounded-t-42 overflow-hidden">
      <div className="relative h-36 sm:h-96">
        <Image
          className="-z-1"
          src="/assets/HeroImagelg.png"
          layout="fill"
          objectFit="cover"
          alt="catwiki hero"
          quality={90}
        />
        <div className="text-white ml-7 md:ml-24 pt-5 sm:pt-28">
          <h1 className="font-mistery font-normal text-sm sm:text-4xl md:text-6xl mb-2 md:mb-3 ">
            catwiki
          </h1>
          <p className="text-xs sm:text-xl  md:text-2xl font-mont w-33 sm:w-80 md:w-96">
            Get to know more about your cat breed
          </p>
        </div>
      </div>
      <div className="px-7 md:px-24 pt-3 bg-heroDown mb-16 rounded-b-42">
        <p className="font-mont text-xs md:text-lg text-customBrown most-searched mb-4">
          Most Searched Breeds
        </p>
        <div className="flex mb-6 md:mb-11">
          <p className="font-mont whitespace-pre text-customBrown text-lg md:text-5xl font-bold">
            66+ Brereds For you {"\n"}to discover
          </p>
          <a
            href="#"
            className="ml-auto self-end font-mont text-lg hidden sm:block"
          >
            SEE MORE
          </a>
        </div>
        <div className="flex justify-between flex-wrap pb-9 md:pb-24">
          {mockCats.map((cat, index) => (
            <div key={index} className="mb-4 mr-1">
              <div className="relative w-breed md:w-breed-md h-breed md:h-breed-md rounded-xl overflow-hidden mb-3 md:mb-5">
                <Image
                  src={cat.img}
                  layout="fill"
                  objectFit="cover"
                  alt="cats breeds"
                />
              </div>
              <p className="font-mont text-customBrown text-xs md:text-lg font-semibold">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
