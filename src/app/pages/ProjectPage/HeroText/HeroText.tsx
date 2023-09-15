import React from 'react';

export default function HeroText() {
  return (
    <>
      <div className='absolute left-[432px] top-[85px] inline-flex flex-col items-center gap-[24px]'>
        <p className="relative mt-[-1.00px] w-fit whitespace-nowrap text-[48px] font-normal leading-[48px] tracking-[0] text-black [font-family:'Manrope-Regular',Helvetica]">
          Wait ! Your Order In Progress.
        </p>
        <p className="relative w-fit whitespace-nowrap text-[24px] font-normal leading-[24px] tracking-[0] text-[#4d5254] [font-family:'Manrope-Regular',Helvetica]">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
        </p>
      </div>
    </>
  );
}
