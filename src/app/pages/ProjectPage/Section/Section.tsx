import Image from 'next/image';
import React from 'react';

export default function Section() {
  return (
    <>
      <div className='absolute left-[128px] top-[351px] h-[879px] w-[1245px] overflow-hidden rounded-[10px] bg-[#f9f9f9]'>
        <Image
          className='absolute left-[40px] top-[40px] h-[591px] w-[575px] object-cover'
          alt='Image'
          src='image-4.png'
        />
        <div className='absolute left-[655px] top-[40px] inline-flex flex-col items-start gap-[32px]'>
          <p className="relative mt-[-1.00px] self-stretch text-[32px] font-normal leading-[44.8px] tracking-[0] text-transparent [font-family:'Manrope-Regular',Helvetica]">
            <span className='text-[#2c7ef8]'>ONE TIME ONLY</span>
            <span className='text-black'>
              special price for 6 extra Clarifion for only
            </span>
            <span className='text-[#2c7ef8]'>$14 each</span>
            <span className='text-black'> ($84.00 total!)</span>
          </p>
          <div className='relative flex w-full flex-[0_0_auto] items-center gap-[24px] self-stretch'>
            <div className='relative h-[134px] w-[134px] rounded-[10px] bg-[#2c7ef8] bg-cover bg-[50%_50%]' />
            <div className='relative flex flex-1 grow flex-col items-start gap-[15px]'>
              <div className='relative flex w-full flex-[0_0_auto] items-center justify-between self-stretch'>
                <div className="relative w-fit whitespace-nowrap text-[20px] font-normal leading-[28.0px] tracking-[0] text-black [font-family:'Manrope-Regular',Helvetica]">
                  Clarifion Air Ionizer
                </div>
                <div className='relative inline-flex flex-[0_0_auto] items-center justify-center gap-[10px]'>
                  <div className="relative w-fit whitespace-nowrap text-[16px] font-semibold leading-[normal] tracking-[0] text-[#969696] line-through [font-family:'Manrope-SemiBold',Helvetica] [text-shadow:0px_6px_32px_#00000061]">
                    $180
                  </div>
                  <div className="relative mt-[-1.00px] w-fit whitespace-nowrap text-[22px] font-semibold leading-[30.8px] tracking-[0] text-[#2c7ef8] [font-family:'Manrope-SemiBold',Helvetica]">
                    $84
                  </div>
                </div>
              </div>
              <Image
                className='relative h-[18px] w-[98px]'
                alt='Stars'
                src='image.png'
              />
              <div className='relative inline-flex flex-[0_0_auto] items-center gap-[16px]'>
                <div className='relative h-[16px] w-[16px] rounded-[8px] bg-[#e3edff]'>
                  <div className='relative left-[4px] top-[4px] h-[9px] w-[9px] rounded-[4.27px] bg-[#2c7ef8]' />
                </div>
                <div className="relative mt-[-1.39px] w-fit text-[16px] font-light leading-[normal] tracking-[0] text-[#37465a] [font-family:'Manrope-Light',Helvetica]">
                  12 left in Stock
                </div>
              </div>
              <p className="relative mr-[-6.00px] w-[398px] text-[16px] font-normal leading-[22.4px] tracking-[0] text-[#4d5254] [font-family:'Manrope-Regular',Helvetica]">
                Simply plug a Clarifion into any standard outlet and replace
                bulky, expensive air purifiers with a simple.
              </p>
            </div>
          </div>
          <div className='relative flex w-full flex-[0_0_auto] flex-col items-start gap-[16px] self-stretch'>
            <div className='relative inline-flex flex-[0_0_auto] items-center gap-[12px]'>
              <Image
                className='relative ml-[-0.25px] h-[22px] w-[22.5px]'
                alt='Tick circle'
                src='tick-circle-4.svg'
              />
              <p className="relative w-[447px] text-[16px] font-normal leading-[25.6px] tracking-[0] text-[#4d5254] [font-family:'Manrope-Regular',Helvetica]">
                <span className="text-[16px] font-normal leading-[25.6px] tracking-[0] text-[#4d5254] [font-family:'Manrope-Regular',Helvetica]">
                  Negative Ion Technology may
                </span>
                <span className="font-bold [font-family:'Manrope-Bold',Helvetica]">
                  help with allergens
                </span>
              </p>
            </div>
            <div className='relative inline-flex flex-[0_0_auto] items-center gap-[12px]'>
              <Image
                className='relative ml-[-0.25px] h-[22px] w-[22.5px]'
                alt='Tick circle'
                src='tick-circle.svg'
              />
              <p className="relative w-fit whitespace-nowrap text-[16px] font-normal leading-[25.6px] tracking-[0] text-[#4d5254] [font-family:'Manrope-Regular',Helvetica]">
                <span className="text-[16px] font-normal leading-[25.6px] tracking-[0] text-[#4d5254] [font-family:'Manrope-Regular',Helvetica]">
                  Designed for
                </span>
                <span className="font-bold [font-family:'Manrope-Bold',Helvetica]">
                  air rejuvenation
                </span>
              </p>
            </div>
            <div className='relative inline-flex flex-[0_0_auto] items-center gap-[12px]'>
              <Image
                className='relative ml-[-0.25px] h-[22px] w-[22.5px]'
                alt='Tick circle'
                src='image.svg'
              />
              <p className="relative w-fit whitespace-nowrap text-[16px] font-normal leading-[25.6px] tracking-[0] text-[#4d5254] [font-family:'Manrope-Bold',Helvetica]">
                <span className='font-bold'>Perfect for every room</span>
                <span className="[font-family:'Manrope-Regular',Helvetica]">
                  in all types of places.
                </span>
              </p>
            </div>
          </div>
          <div className='relative flex w-[542px] flex-[0_0_auto] flex-col items-start gap-[10px] rounded-[10px] bg-[#edf3fc] px-[16px] py-[12px]'>
            <div className='relative inline-flex flex-[0_0_auto] items-center gap-[16px]'>
              <div className='relative h-[32px] w-[32px] rounded-[16px] bg-[#2c7ef8]'>
                <Image
                  className='absolute left-[6px] top-[6px] h-[19px] w-[19px]'
                  alt='Percent'
                  src='percent.png'
                />
              </div>
              <p className="relative w-fit whitespace-nowrap text-[16px] font-normal leading-[22.4px] tracking-[0] text-transparent [font-family:'Manrope-Regular',Helvetica]">
                <span className='text-black'>Save </span>
                <span className='text-[#2c7ef8]'>53%</span>
                <span className='text-black'> and get </span>
                <span className='text-[#2c7ef8]'>6 extra Clarifision</span>
                <span className='text-black'> for only </span>
                <span className='text-[#2c7ef8]'>$14 Each</span>
                <span className='text-black'>.</span>
              </p>
            </div>
          </div>
          <div className='relative flex w-[542px] flex-[0_0_auto] flex-col items-center gap-[20px]'>
            <div className='relative flex w-full flex-[0_0_auto] flex-col items-center gap-[12px] self-stretch'>
              <div className='relative flex w-full flex-[0_0_auto] flex-col items-center justify-center gap-[10px] self-stretch rounded-[50px] bg-[#59ae43] px-[64px] py-[16px]'>
                <div className='relative inline-flex flex-[0_0_auto] items-center gap-[19.76px]'>
                  <p className="relative mt-[-0.99px] w-fit text-[20px] font-bold leading-[normal] tracking-[0] text-white [font-family:'Manrope-Bold',Helvetica]">
                    YES - CLAIM MY DISCOUNT
                  </p>
                  <Image
                    className='relative mr-[-0.99px] h-[14.55px] w-[16.99px]'
                    alt='Line'
                    src='line-1.svg'
                  />
                </div>
              </div>
              <div className='relative flex w-full flex-[0_0_auto] items-center justify-center gap-[16px] self-stretch rounded-[4px] border border-solid border-[#cfcfcf] px-[16px] py-[8px]'>
                <div className="relative ml-[-2.00px] mt-[-1.00px] w-fit whitespace-nowrap text-[12px] font-normal leading-[16.8px] tracking-[0] text-[#4d5254] [font-family:'Manrope-Regular',Helvetica]">
                  Free Shipping
                </div>
                <Image
                  className='relative h-[16px] w-px object-cover'
                  alt='Line'
                  src='line-2.svg'
                />
                <div className='relative inline-flex flex-[0_0_auto] items-center gap-[10px]'>
                  <Image
                    className='relative h-[12px] w-[12px]'
                    alt='Lock'
                    src='lock-7-1.svg'
                  />
                  <div className="relative w-fit whitespace-nowrap text-center text-[12px] font-normal leading-[18px] tracking-[0] text-[#4d5254] [font-family:'Manrope-Regular',Helvetica]">
                    Secure 256-bit Ssl Encryption.
                  </div>
                </div>
                <Image
                  className='relative h-[16px] w-px object-cover'
                  alt='Line'
                  src='line-3.svg'
                />
                <div className='relative mr-[-2.00px] inline-flex flex-[0_0_auto] items-center justify-center gap-[2px]'>
                  <Image
                    className='relative h-[14px] w-[24px]'
                    alt='Visa'
                    src='visa.svg'
                  />
                  <Image
                    className='relative h-[14px] w-[24px]'
                    alt='Shop pay'
                    src='shop-pay.svg'
                  />
                  <Image
                    className='relative h-[14px] w-[24px]'
                    alt='Paypal'
                    src='paypal.svg'
                  />
                  <Image
                    className='relative h-[14px] w-[24px]'
                    alt='Mastercard'
                    src='mastercard.svg'
                  />
                  <Image
                    className='relative h-[14px] w-[24px]'
                    alt='Gpay'
                    src='gpay.svg'
                  />
                  <Image
                    className='relative h-[14px] w-[24px]'
                    alt='Apple pay'
                    src='apple-pay.svg'
                  />
                  <Image
                    className='relative h-[14px] w-[24px]'
                    alt='Amex'
                    src='amex.svg'
                  />
                </div>
              </div>
            </div>
            <p className="relative w-fit text-[18px] font-medium leading-[normal] tracking-[0] text-[#f82c2c] underline [font-family:'Manrope-Medium',Helvetica]">
              NO THANKS, I DON’T WANT THIS.
            </p>
          </div>
          <div className='relative inline-flex flex-[0_0_auto] items-center gap-[16px]'>
            <Image
              className='relative h-[88px] w-[88px]'
              alt='Image'
              src='image-6.png'
            />
            <p className="relative w-[446px] text-[16px] font-normal leading-[22.4px] tracking-[0] text-[#4d5254] [font-family:'Manrope-Regular',Helvetica]">
              <span className="text-[16px] font-normal leading-[22.4px] tracking-[0] text-[#4d5254] [font-family:'Manrope-Regular',Helvetica]">
                If you are not completely thrilled with your Clarifion - We have
                a{' '}
              </span>
              <span className="font-bold [font-family:'Manrope-Bold',Helvetica]">
                30 day satisfaction guarantee
              </span>
              <span className="text-[16px] font-normal leading-[22.4px] tracking-[0] text-[#4d5254] [font-family:'Manrope-Regular',Helvetica]">
                . Please refer to our return policy at the bottom of the page
                for more details. Happy Shopping!
              </span>
            </p>
          </div>
        </div>
        <div className='absolute left-[40px] top-[655px] flex w-[575px] flex-col items-start gap-[18px] rounded-[10px] bg-white p-[24px]'>
          <div className='relative inline-flex flex-[0_0_auto] items-center gap-[13px]'>
            <Image
              className='relative h-[48px] w-[48px]'
              alt='Rectangle'
              src='rectangle-1127.png'
            />
            <div className='relative h-[35.3px] w-[176px]'>
              <Image
                className='absolute left-0 top-0 h-[12px] w-[78px]'
                alt='Stars'
                src='stars.png'
              />
              <div className='absolute left-0 top-[19px] inline-flex items-center gap-[10px]'>
                <div className="relative w-fit whitespace-nowrap text-[14px] font-bold leading-[14px] tracking-[0] text-[#333333] [font-family:'Manrope-Bold',Helvetica]">
                  Ken T.
                </div>
                <div className='relative mr-[-2.00px] h-[16px] w-[128px]'>
                  <div className="absolute left-[26px] top-px whitespace-nowrap text-[12px] font-normal leading-[14.4px] tracking-[0] text-[#5bb59a] [font-family:'Manrope-Regular',Helvetica]">
                    Verified Customer
                  </div>
                  <Image
                    className='absolute left-0 top-0 h-[16px] w-[16px]'
                    alt='Verify'
                    src='verify-1.svg'
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="relative self-stretch text-[16px] font-normal leading-[24px] tracking-[0] text-[#4d5254] [font-family:'Manrope-Regular',Helvetica]">
            “As soon as the Clarifions arrived I put one in my bedroom. This was
            late in the afternoon. When I went to the bedroom in the evening it
            smelled clean. When I went to bed I felt I could breathe better.
            Wonderful.”
          </p>
        </div>
      </div>
    </>
  );
}
