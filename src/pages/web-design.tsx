import React from "react";
import DynamicHero from "@/containers/heroes/DynamicHero";
import WebCards from "@/containers/WebCards";

const WebDesign = () => {
  return (
    <div className="mb-56">
      <DynamicHero
        heading="Web Design"
        paragraph="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <WebCards />
    </div>
  );
};

export default WebDesign;
