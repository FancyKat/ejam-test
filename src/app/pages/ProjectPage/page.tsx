'use client';

import React from 'react';

import Banner from '@/app/pages/ProjectPage/Banner/Banner';
import Header from '@/app/pages/ProjectPage/Header/Header';
import HeroText from '@/app/pages/ProjectPage/HeroText/HeroText';
import ProcessBar from '@/app/pages/ProjectPage/ProcessBar/ProcessBar';

export default function ComponentPage() {
  return (
    <main>
      <div className='flex w-full flex-row justify-center bg-white'>
        <div className='relative h-[1379px] w-[1500px] bg-white'>
          <Header />
          <div className='absolute left-0 top-[50px] h-[161px] w-[1500px]'>
            <Banner />
            <HeroText />
          </div>
          <ProcessBar />
        </div>
      </div>
    </main>
  );
}
