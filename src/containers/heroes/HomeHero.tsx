import React from "react";
import Image from "next/image";
import bgImg from "../../../public/assets/images/home/desktop/image-hero-phone.png";

const HomeHero = () => {
  return (
    <div className="relative flex  flex-col items-center bg-customOrange px-6 pb-[451px] pt-20 text-center overflow-hidden">
      <h1 className="text-[32px] font-medium leading-[36px] text-white">
        Award-winning custom designs and digital branding solutions
      </h1>
      <p className="mt-[14px] text-white">
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <button className="mt-6 flex h-[56px] w-[152px] items-center justify-center rounded-lg bg-white text-[15px] font-medium uppercase tracking-[1px] text-customBlack">
        learn more
      </button>

      <div className="absolute bottom-[-375px] w-[624px]">
      <Image src={bgImg} alt="Mobile Phone" priority />
      </div>
    </div>
  );
};

export default HomeHero;
