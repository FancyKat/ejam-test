import Image from 'next/image';
import React from 'react';

export default function ProcessBar() {
  return (
    <>
      <div className='absolute left-[128px] top-[271px] flex w-[1245px] items-center justify-between'>
        <div className='relative inline-flex flex-[0_0_auto] items-center gap-[20px]'>
          <div className='relative h-[40px] w-[40px] rounded-[20px] bg-[#85bf55]'>
            <Image
              className='absolute left-[9px] top-[12px] h-[17px] w-[23px]'
              alt='Tick circle'
              width={23}
              height={17}
              src='/svg/tick-circle-2.svg'
            />
          </div>
          <p className="relative w-fit whitespace-nowrap text-[20px] font-normal leading-[22.0px] tracking-[0] text-black [font-family:'Manrope-Regular',Helvetica]">
            Step 1 : Cart Review
          </p>
        </div>
        <div className='relative inline-flex flex-[0_0_auto] items-center gap-[20px]'>
          <div className='relative h-[40px] w-[40px] rounded-[20px] bg-[#85bf55]'>
            <Image
              className='absolute left-[9px] top-[12px] h-[17px] w-[23px]'
              alt='Tick circle'
              width={23}
              height={17}
              src='/svg/tick-circle-3.svg'
            />
          </div>
          <div className="relative w-fit whitespace-nowrap text-[20px] font-normal leading-[22.0px] tracking-[0] text-black [font-family:'Manrope-Regular',Helvetica]">
            Step 2 : Checkout
          </div>
        </div>
        <div className='relative inline-flex flex-[0_0_auto] items-center gap-[20px]'>
          <div className='relative h-[40px] w-[42px]'>
            <div className='relative h-[40px] w-[40px] rounded-[20px] bg-[#2c7ef8]'>
              <div className="absolute left-[14px] top-[13px] whitespace-nowrap text-[20px] font-normal leading-[22.0px] tracking-[0] text-white [font-family:'Manrope-Regular',Helvetica]">
                3
              </div>
            </div>
          </div>
          <p className="relative w-fit whitespace-nowrap text-[20px] font-bold leading-[22.0px] tracking-[0] text-black [font-family:'Manrope-Bold',Helvetica]">
            Step 3 : Special Offer
          </p>
        </div>
        <div className='relative inline-flex flex-[0_0_auto] items-center gap-[20px]'>
          <div className='relative h-[40px] w-[42px]'>
            <div className='relative h-[40px] w-[40px] rounded-[20px] border-2 border-solid border-[#2c7ef8]'>
              <div className="absolute left-[12px] top-[11px] whitespace-nowrap text-[20px] font-normal leading-[22.0px] tracking-[0] text-[#2c7ef8] [font-family:'Manrope-Regular',Helvetica]">
                4
              </div>
            </div>
          </div>
          <div className="relative w-fit whitespace-nowrap text-[20px] font-normal leading-[22.0px] tracking-[0] text-black [font-family:'Manrope-Regular',Helvetica]">
            Step 4 : Confirmation
          </div>
        </div>
      </div>
    </>
  );
}
