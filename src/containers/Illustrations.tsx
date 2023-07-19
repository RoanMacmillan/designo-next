import React from "react";
import Image from "next/image";
import illustrationData, { IllustrationData } from "@/data/IllustrationData";
import circle from "../../public/assets/images/shared/desktop/bg-pattern-small-circle.svg";

const Illustrations = () => {
  return (
    <div className="mt-[120px] px-6 pb-[311px]">
      {illustrationData.map((illustration: IllustrationData, index: number) => (
        <div
          key={index}
          className="mt-[80px] flex flex-col items-center text-center"
        >
          <div className="relative">
            <Image
              src={illustration.image}
              width={202}
              height={202}
              alt={illustration.heading}
            />

            <Image
              src={circle}
              width={202}
              height={202}
              alt={circle}
              className="absolute top-0 z-[-1] opacity-70"
            />
          </div>

          <h2 className="mt-12 text-[20px] font-medium uppercase leading-[26px] tracking-[5px]">
            {illustration.heading}
          </h2>
          <p className="mt-8 text-base leading-[26px] text-customBlack">
            {illustration.paragraph}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Illustrations;
