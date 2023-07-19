import React from "react";
import webCards, { WebCards } from "@/data/webCards";
import Image from "next/image";

const WebCards = () => {
  return (
  
  
  
  <div>

    {webCards.map((webCards: WebCards, index: number) => (

        <div key={index}>
        
        <Image src={webCards.image} alt={webCards.heading} fill={true} />
        
        <div className="bg-customLightOrange">

        <h2>{webCards.heading}</h2>
        <p>{webCards.paragraph}</p>


        </div>

        </div>


    ))}


  </div>

)
};

export default WebCards;
