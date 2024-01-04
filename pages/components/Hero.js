import React from 'react';
import Image from 'next/image';
import hero from '../assets/HeroImage.png';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between' id='home'>
      <div className='md:pl-20 px-10 xl:pt-[10rem] md:pt-[3rem] pt-12'>
        <h1 className='text-secondary-color xl:text-7xl md:text-2xl text-2xl mx-auto font-poppins font-bold xl:leading-[6rem] md:leading-[2rem]'>
          Welcome!<br /> My name is Moreno.
        </h1>
        <p className='text-secondary-color font-poppins font-normal xl:py-[25px] md:py-[20px] py-4 xl:text-2xl md:text-1xl md:leading-normal md:w-[500px] xl:w-full'>
          I am a software engineer and designer with a big creative<br className='md:hidden xl:block hidden' /> mind, who loves the idea of creating amazing things. If that<br className='md:hidden xl:block hidden'/> sounds cool hit me up!
        </p>
        <button className='py-4'>
          <Link className='md:block mr-[31px] border-[3px] text-secondary-color hover:border-tertiary-color font-poppins font-bold px-5 md:py-1 py-2 rounded-full' href='#contact'>
            Hit Me Up!
          </Link>
        </button>
      </div>
      <div className='pt-6 md:px-0 px-20'>
        <Image src={hero} alt='hero' className='xl:w-[620px] md:w-[320px] xl:pt-2 md:pt-12 '/>
      </div>
    </div>
  )
}

export default Hero