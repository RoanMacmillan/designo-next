import React from "react";
import Link from "next/link";
import Logo from "../../public/assets/images/shared/desktop/logo-light.png";
import Image from "next/image";
import icons, { Icons } from "@/data/icons";

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center bg-customBlackBg px-6 pb-16 text-center">
      <div
        style={{
          backgroundImage:
            "url(/assets/images/shared/desktop/bg-pattern-three-circles.svg)",
        }}
        className="absolute top-[-189px] mx-6 rounded-[15px] bg-customOrange px-6 py-[64px]"
      >
        <h2 className="text-[32px] font-medium leading-[36px] text-white">
          Let's talk about your project
        </h2>

        <p className="mt-4 text-[15px] leading-[25px] text-white">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>

        <button className="mt-8 h-[56px] w-[152px] rounded-lg bg-white text-[15px] font-medium uppercase tracking-[1px] text-customBlack">
          get in touch
        </button>
      </div>

      <Image
        src={Logo}
        alt="Logo"
        width={202}
        height={27}
        className="mt-[253px]"
      />

      <div className="mt-8 h-[1px] w-full bg-white opacity-10"></div>

      <nav className="mt-8 flex flex-col gap-8 text-sm uppercase leading-[14px] text-white">
        <Link href="/our-company">our company</Link>
        <Link href="/locations">locations</Link>
        <Link href="/contact">contact</Link>
      </nav>

      <div className="mt-10 flex flex-col gap-10 text-white opacity-50">
        <div>
          <h3 className="text-base font-bold">Designo Central Office</h3>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div>
          <h3 className="text-base font-bold">Designo Central Office</h3>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
      </div>

      <div className="mt-10 flex items-center gap-4">
        {icons.map((icons: Icons, index: number) => (
          <div key={index}>
            <Image src={icons.image} alt="Social Icon" height={24} width={24} />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
