import React from 'react'

type DynamicHeroProps = {
  heading: string;
  paragraph: string;
};

const DynamicHero = ({ heading, paragraph }: DynamicHeroProps) => {
  return (
    <div className='bg-customOrange px-6 text-center pt-[105px] pb-[105px] text-white'>
      <h1 className=' text-[32px] leading-[36px] font-medium'>{heading}</h1>
      <p className='mt-6 text-[15px] font-normal leading-[25px]'>{paragraph}</p>
    </div>
  )
}

export default DynamicHero

