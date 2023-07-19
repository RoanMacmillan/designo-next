import React from "react";
import Image from "next/image";
import logo from "../../public/assets/images/shared/desktop/logo-dark.png";
import hamburger from "../../public/assets/images/shared/mobile/icon-hamburger.svg";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-9">
      <div className="w-[202px]">
      <Image src={logo} alt="Header Image" priority />
      </div>
      <Image src={hamburger} alt="Hamburger"/>
    </header>
  );
};

export default Header;
