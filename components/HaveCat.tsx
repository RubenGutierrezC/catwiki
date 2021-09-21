import Image from "next/image";
const title = "Why should you have a cat?";

const description =
  "Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels";

const HaveCat = () => {
  return (
    <section className="flex flex-wrap mb-6 md:mb-24">
      <div>
        <h3 className="font-mont font-bold text-customBrown text-4xl md:text-5xl why-have-cat mb-10">
          {title}
        </h3>
        <p className="font-mont font-medium text-customBrown text-lg mb-7">
          {description}
        </p>
        <a href="#" className=" text-customBrown self-end font-mont text-lg ">
          READ MORE
        </a>
      </div>
      <div className="flex">
        <div className="flex flex-col mr-4">
          <div className="relative w-44 h-24 mb-4">
            <Image src="/assets/image2.png" alt="cat1" layout="fill" />
          </div>
          <div className="relative w-32 h-48 self-end">
            <Image src="/assets/image1.png" alt="cat2" layout="fill" />
          </div>
        </div>
        <div>
          <div className="relative w-33 h-60">
            <Image src="/assets/image3.png" alt="cat3" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HaveCat;
