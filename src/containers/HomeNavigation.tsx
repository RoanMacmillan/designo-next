import React from "react";
import Image from "next/image";
import Link from "next/link";
import navigationData, { NavigationData } from "@/data/navigation";

const HomeNavigation = () => {
  return (
    <div className="px-6 mt-[120px]">
      {navigationData.map((navigation: NavigationData, index: number) => (
        <div key={index} className="relative h-[250px] mt-6 rounded-[15px] overflow-hidden">
          <div className="absolute z-10 flex items-center justify-center flex-col w-full h-full text-white">
            <h2 className="text-[28px] uppercase tracking-[1.4px] leading-[36px] font-medium">{navigation.heading}</h2>
            <Link className="text-[15px] font-medium uppercase tracking-[5px] mt-[11px]" href={navigation.link}>view projects</Link>
          </div>
          
          <Image
            src={navigation.image}
            alt={navigation.heading}
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default HomeNavigation;
