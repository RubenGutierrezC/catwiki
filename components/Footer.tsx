import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-black rounded-t-42 pl-5 pt-8 pb-7">
      <Image
        src="/assets/CatwikiLogoWhite.svg"
        alt="catwiki logo"
        height={43}
        width={127}
        quality={100}
      />
      <div className="flex text-white">
        <p className="inline text-2xl">&copy;&nbsp;</p>
        <p className="font-mont text-xs font-normal self-center">
          created by{" "}
          <a href="#" className="underline font-bold">
            RubenGutierrezC
          </a>
          - devChallenge.io 2021
        </p>
      </div>
    </footer>
  );
};

export default Footer;
