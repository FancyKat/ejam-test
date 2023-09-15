import Image from 'next/image';
import React from 'react';

export default function Banner() {
  return (
    <>
      <div className='absolute left-0 top-[50px] h-[161px] w-[1500px]'>
        <div className='absolute left-0 top-0 flex w-[1500px] items-center justify-between bg-white px-[127px] py-[30px]'>
          <Image
            className='relative h-[36px] w-[192px] object-cover'
            alt='Img'
            width={192}
            height={36}
            src='/images/600a41c73b670a97ae1d4f47-clarifion-logo-1.png'
          />
          <div className='relative inline-flex items-start gap-[32px]'>
            <Image
              className='relative h-[32px] w-[88px]'
              alt='Frame'
              width={88}
              height={32}
              src='/svg/frame-1484578055.svg'
            />

            <Image
              className='relative h-[32px] w-[82px]'
              alt='Norton antivirus'
              width={82}
              height={32}
              src='/svg/norton-antivirus-logo-1.svg'
            />
          </div>
        </div>
      </div>
    </>
  );
}
