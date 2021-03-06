import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-black rounded-t-42 lg:pl-24 px-5 pt-8 pb-7 flex justify-between">
      <Image
        src="/assets/CatwikiLogoWhite.svg"
        alt="catwiki logo"
        height={43}
        width={127}
        quality={100}
      />
      <div className="flex text-white items-center">
        <p className="inline text-2xl">&copy;&nbsp;</p>
        <p className="font-mont text-xs md:text-lg font-normal self-center">
          created by{" "}
          <a
            href="https://github.com/RubenGutierrezC"
            target="_blank"
            rel="noreferrer"
            className="underline font-bold"
          >
            RubenGutierrezC
          </a>
          - devChallenge.io 2021
        </p>
      </div>
    </footer>
  );
};

export default Footer;
