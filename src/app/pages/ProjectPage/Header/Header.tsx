import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <>
      <div className='absolute left-0 top-0 h-[50px] w-[1500px] bg-[#252f3d]'>
        <div className='absolute left-[127px] top-[15px] h-[22px] w-[229px]'>
          <Image
            className='absolute left-0 top-0 h-[22px] w-[22px]'
            alt='Fluent checkmark'
            width={22}
            height={22}
            src='/svg/fluent-checkmark-starburst-20-regular.svg'
          />
          <div className="absolute left-[30px] top-[7px] whitespace-nowrap text-[12px] font-medium leading-[12px] tracking-[0] text-white [font-family:'Manrope-Medium',Helvetica]">
            30-day Satisfaction Guarantee
          </div>
        </div>
        <div className='absolute left-[468px] top-[15px] h-[22px] w-[259px]'>
          <Image
            className='absolute left-0 top-0 h-[22px] w-[22px]'
            alt='Ph truck light'
            width={22}
            height={22}
            src='/svg/ph-truck-light.svg'
          />
          <p className="absolute left-[30px] top-[7px] whitespace-nowrap text-[12px] font-medium leading-[12px] tracking-[0] text-white [font-family:'Manrope-Medium',Helvetica]">
            FREE DELIVERY ON ORDERS OVER $40.00
          </p>
        </div>
        <div className='absolute left-[847px] top-[15px] h-[22px] w-[194px]'>
          <Image
            className='absolute left-0 top-0 h-[22px] w-[22px]'
            alt='Mdi cards heart'
            width={22}
            height={22}
            src='/svg/mdi-cards-heart-outline.svg'
          />
          <div className="absolute left-[30px] top-[7px] whitespace-nowrap text-[12px] font-medium leading-[12px] tracking-[0] text-white [font-family:'Manrope-Medium',Helvetica]">
            50.000+ Happy Customers
          </div>
        </div>
        <div className='absolute left-[1154px] top-[15px] h-[22px] w-[211px]'>
          <Image
            className='absolute left-0 top-0 h-[22px] w-[22px]'
            alt='Fluent arrow sync'
            width={22}
            height={22}
            src='/svg/fluent-arrow-sync-checkmark-20-regular.svg'
          />
          <div className="absolute left-[30px] top-[7px] whitespace-nowrap text-[12px] font-medium leading-[12px] tracking-[0] text-white [font-family:'Manrope-Medium',Helvetica]">
            100% MONEY BACK GUARANTEE
          </div>
        </div>
      </div>
    </>
  );
}
