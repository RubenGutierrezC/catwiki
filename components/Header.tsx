import Image from "next/image";
const Header = () => (
  <header>
    <Image
      src="/assets/CatwikiLogo.svg"
      alt="catwiki logo"
      height={43}
      width={127}
      quality={100}
    />
  </header>
);

export default Header;
