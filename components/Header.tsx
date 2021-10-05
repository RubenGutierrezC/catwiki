import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <header>
    <Link href="/" passHref>
      <Image
        className="cursor-pointer"
        src="/assets/CatwikiLogo.svg"
        alt="catwiki logo"
        height={43}
        width={127}
        quality={100}
      />
    </Link>
  </header>
);

export default Header;
