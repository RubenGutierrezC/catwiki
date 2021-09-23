import Image from "next/image";
const title = "Why should you have a cat?";

const description =
  "Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels";

const HaveCat = () => {
  return (
    <section className="flex flex-wrap mb-6 md:mb-24 justify-center lg:justify-between">
      <div className="mb-16">
        <h3 className="font-mont font-bold text-customBrown text-4xl md:text-5xl why-have-cat mb-10 max-w-havingTitle">
          {title}
        </h3>
        <p className="font-mont font-medium text-customBrown text-lg mb-7 max-w-havingDescription">
          {description}
        </p>
        <a
          href="#"
          className=" text-linkBrown self-end font-mont text-xs md:text-lg font-bold"
        >
          READ MORE &#8594;
        </a>
      </div>
      <div className="flex">
        <div className="flex flex-col mr-4">
          <div className="relative w-44 md:w-56 lg:w-64 h-24 md:h-36 lg:h-40 mb-4">
            <Image src="/assets/image2.png" alt="cat1" layout="fill" />
          </div>
          <div className="relative w-32 md:w-40 lg:w-48 h-32 md:h-40 lg:h-72 self-end">
            <Image src="/assets/image1.png" alt="cat2" layout="fill" />
          </div>
        </div>
        <div>
          <div className="relative w-33 md:w-44 lg:w-60 h-60 lg:h-96">
            <Image src="/assets/image3.png" alt="cat3" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HaveCat;
